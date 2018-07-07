import app from '../../app';
import Widget from '../widget';
import Row from './calculator-row';
import input from '../../modules/form/input';
import config from './config';
import calculate from './utils/calculate';
import rowValueDialog from '../../dialogs/calculator-row-value';
import compile from '../../utils/compile';
import calculatorTpl from '../../../generated/templates/widgets/calculator.html';

function destroyRow(rowWrap) {
    const ctr = rowWrap.data('controller');

    if (ctr) {
        ctr.destroy();
    }
}

function updateCellsByInputs(node) {
    let ctr = node.data('controller');

    if (ctr) {
        ctr.updateCellsByInputs();
    }
}

class Calculator extends Widget {

    constructor() {
        super();
    }

    // handlers

    recalculateHandler(e) {
        e.stopPropagation();

        const data = this.getFormData();

        this.calculateAndUpdateForm(data);
    }

    sendClickHandler(e) {
        e.preventDefault();

        if (!this.sendBtn.hasClass('timing')) {
            app.input.validate(this.nameInput);
            app.input.validate(this.emailInput);

            if (
                input.isValid(this.nameInput) &&
                input.isValid(this.emailInput)
            ) {
                this.form.trigger('submit');
            }
        }
    }

    // methods

    calculateAndUpdateForm(data) {
        const _this = this;

        this.setDataToForm(calculate(data));
        this.incomes.each((i) => {
            updateCellsByInputs(_this.incomes.eq(i));
        });
        this.expenses.each((i) => {
            updateCellsByInputs(_this.expenses.eq(i));
        });
        this.loanDetails.each((i) => {
            updateCellsByInputs(_this.loanDetails.eq(i));
        });
        this.results.each((i) => {
            updateCellsByInputs(_this.results.eq(i));
        });
    }

    getFormData() {
        return app.form.convertToData(this.form);
    }

    setDataToForm(data) {
        app.form.fillFromData(this.form, data)
    }

    initRows() {
        const _this = this;

        this.incomes.each((i) => {
            _this.initRow(
                _this.incomes.eq(i),
                config.rows.incomes[i]
            );
        });
        this.expenses.each((i) => {
            _this.initRow(
                _this.expenses.eq(i),
                config.rows.expenses[i]
            );
        });
        this.loanDetails.each((i) => {
            _this.initRow(
                _this.loanDetails.eq(i),
                config.rows.loanDetails[i]
            );
        });
        this.results.each((i) => {
            _this.initRow(
                _this.results.eq(i),
                config.rows.results[i]
            );
        });
    }

    initRow(rowWrap, model) {
        let ctr = new Row(this);

        rowWrap.data('controller', ctr);
        ctr.setModel(model);
        ctr.init(rowWrap);
    }

    init(node) {
        const action = '/send-email';
        const hostDev = app.data.host.dev + action;
        const hostProd = app.data.host.prod + action;

        this.wrap = node.append(compile(calculatorTpl, {
            action: hostProd,
            incomes: config.rows.incomes,
            expenses: config.rows.expenses,
            loanDetails: config.rows.loanDetails,
            results: config.rows.results,
        })).on('recalculate', this.recalculateHandler.bind(this));
        this.form = node.find('form');
        this.nameInput = node.find('.name input');
        this.emailInput = node.find('.email input');

        this.incomes = node.find('.incomes .calculator-row');
        this.expenses = node.find('.expenses .calculator-row');
        this.loanDetails = node.find('.loan-details .calculator-row');
        this.results = node.find('.results .calculator-row');

        this.sendBtn = node.find('.send').on('click', this.sendClickHandler.bind(this));
        this.rowDialog = rowValueDialog();

        if (app.mailTimer) {
            app.mailTimer.setOutputWrap(this.sendBtn);
            app.mailTimer.setDefaultOutputMsg(config.sendBtnText);
            app.mailTimer.markTiming();
        }

        this.calculateAndUpdateForm(config.defaultFormData);
        this.initRows();
    }

    destroy() {
        if (this.wrap) {
            const _this = this;

            if (app.mailTimer) {
                app.mailTimer.setOutputWrap(null);
                app.mailTimer.setDefaultOutputMsg('');
            }

            this.rowDialog.destroy();
            this.incomes.each((i) => {
                destroyRow(_this.incomes.eq(i));
            });
            this.expenses.each((i) => {
                destroyRow(_this.expenses.eq(i));
            });
            this.loanDetails.each((i) => {
                destroyRow(_this.loanDetails.eq(i));
            });
            this.results.each((i) => {
                destroyRow(_this.results.eq(i));
            });
            this.sendBtn.off('click');
            this.wrap
                .off('click recalculate')
                .empty();
        }
    }

}

export default Calculator;
