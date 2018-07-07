import app from '../app';
import input from '../modules/form/input';
import dialogTpl from '../../generated/templates/dialogs/save-calculation.html';

export default function() {
    return app.dialog.create({
        title: 'Enter name',
        content: dialogTpl,
        backdrop: true,
        cssClass: 'save-calculation-dialog',
        buttons: [
            {
                text: 'cancel',
                close: true
            },
            {
                text: 'save',
                close: false,
                bold: true,
                onClick(dialog) {
                    const el = dialog.$el.find('.dialog-input');

                    dialog.app.input.validate(el);

                    if (input.isValid(el)) {
                        dialog.emit('action:save-calculation', el.val());
                    }
                }
            },
        ],
        on: {
            open(dialog) {
                const el = dialog.$el.find('.dialog-input');

                input.resetValidationErrors(el);
                el
                    .val('')
                    .focus();
            }
        }
    });
}
