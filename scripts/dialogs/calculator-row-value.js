import app from '../app';
import input from '../modules/form/input';
import dialogTpl from '../../generated/templates/dialogs/calculator-row-value.html';

export default function() {
    const dialog = app.dialog.create({
        content: dialogTpl,
        backdrop: true,
        cssClass: 'calculator-row-value-dialog',
        buttons: [
            {
                text: 'cancel',
                close: true,
                onClick(dialog) {
                    dialog.currentValue = null;
                    dialog.validationSet = null;
                    dialog.close();
                }
            },
            {
                text: 'update',
                close: false,
                bold: true,
                onClick(dialog) {
                    const el = dialog.$el.find('.dialog-input');

                    dialog.app.input.validate(el);

                    if (input.isValid(el)) {
                        dialog.cb(el.val());
                        dialog.currentValue = null;
                        dialog.validationSet = null;
                        dialog.close();
                    }
                }
            },
        ],
        on: {
            open(dialog) {
                const el = dialog.$el.find('.dialog-input');

                input.removeValidation(el);
                input.resetValidationErrors(el);
                input.setValidation(el, dialog.validationSet ? dialog.validationSet : {});

                el.val(dialog.currentValue === null ? '' : dialog.currentValue);
                el.focus();
            }
        }
    });

    dialog.setDescription = (text) => {
        dialog.$el.find('.description').text(text);
    }

    return dialog;
}
