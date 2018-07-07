import app from '../../app';
import Widget from '../widget';

const pattern = '$s';

function cellInputValue(cell, val) {
    const input = cell.find('input');

    if (val === undefined) {
        return input.val();
    }

    input.val(val);
}

class CalculatorRow extends Widget {

    constructor(parent) {
        super();

        this.dialog = parent.rowDialog;
    }

    editableFieldClickHandler(e) {
        e.stopPropagation();

        let cell = app.$(e.target);

        if (!cell.hasClass('editable')) {
            cell = cell.parent();
        }

        this.openDialog(cell);
    }

    openDialog(cell) {
        const _this = this;
        const model = this.getCellModel(cell);

        if (model) {
            this.dialog.currentValue = cellInputValue(cell);
            this.dialog.validationSet = model.validationSet;
            this.dialog.cb = (val) => {
                cellInputValue(cell, val);
                _this.wrap.trigger('recalculate');
            }

            this.dialog.setText(model.text)
            this.dialog.setTitle(model.dialogTitle);
            this.dialog.setDescription(model.description);
            this.dialog.open();
        }
    }

    updateCellsByInputs() {
        const _this = this;

        this.cells.each((i) => {
            this.updateCellByInput(_this.cells.eq(i));
        });
    }

    updateCellByInput(cell) {
        const val = cellInputValue(cell);
        const model = this.getCellModel(cell);
        const textWrap = cell.find('span');

        if (model) {
            if (model.label && model.editable) {
                textWrap.text(model.label.replace(pattern, val + model.units));
            }
            else if (!model.label) {
                textWrap.text(val + model.units);
            }
        }
    }

    getCellModel(cell) {
        return this.getModel().cells.filter((c, i) => {
            const index = parseInt(cell.data('index'), 10);

            return i === index;
        })[0];
    }

    init(node) {
        this.wrap = node;
        this.cells = node.find('td');

        this.updateCellsByInputs();

        this.wrap.on('click', '.editable', this.editableFieldClickHandler.bind(this));
    }

    destroy() {
        if (this.wrap) {
            this.wrap.off('click');
            this.wrap.remove();
        }
    }

}

export default CalculatorRow;
