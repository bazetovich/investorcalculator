import Calculator from '../../widgets/calculator/calculator';
import tpl from '../../../generated/templates/pages/calculator.html';

let calculator = null;

export default {
    path: '/calculator',
    component: {
        template: tpl,
        data() {
            return {
                item: {
                    name: 'Calculator'
                }
            };
        },
        on: {
            pageInit(e, page) {
                page.app.preloader.show();

                calculator = new Calculator();

                calculator.init(page.$el.find('[data-widget=calculator]'));
                page.app.preloader.hide();
            },
            pageBeforeRemove() {
                if (calculator) {
                    calculator.destroy();
                    calculator = null;
                }
            }
        }
    }
};
