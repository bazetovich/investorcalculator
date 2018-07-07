'use strict'

import App from 'framework7';

import Grid from '../node_modules/framework7/dist/components/grid/grid.js';
import Panel from '../node_modules/framework7/dist/components/panel/panel.js';
import Preloader from '../node_modules/framework7/dist/components/preloader/preloader.js';
import Card from '../node_modules/framework7/dist/components/card/card.js';
import Table from '../node_modules/framework7/dist/components/data-table/data-table.js';
import Form from '../node_modules/framework7/dist/components/form/form.js';
import Input from '../node_modules/framework7/dist/components/input/input.js';
import Dialog from '../node_modules/framework7/dist/components/dialog/dialog.js';
import Toast from '../node_modules/framework7/dist/components/toast/toast.js';
import Popover from '../node_modules/framework7/dist/components/popover/popover.js';

import routes from './routes/routes';
import data from './data/app';
import MailTimer from './modules/mail-timer.js';
import tableBody from '../generated/templates/partials/table-body.html';

App.use([
    Grid,
    Panel,
    Preloader,
    Card,
    Table,
    Form,
    Input,
    Dialog,
    Toast,
    Popover
]);

let app = new App({
    name: 'Real estate profit calculator',
    id: 'com.ikurski.realestateprofitcalculator',
    theme: 'auto',
    root: '#app',
    touch: {
        materialRipple: false
    },
    panel: {
        swipe: 'left',
        swipeActiveArea: 30,
        swipeNoFollow: true,
        leftBreakpoint: 768
    },
    toast: {
        position: 'top',
        destroyOnClose: true,
        closeTimeout: 4000,
    },
    popover: {
        closeByBackdropClick: true,
    },
    routes: routes,
    data: data,
    on: {
        formAjaxBeforeSend() {
            this.preloader.show();
        },

        formAjaxSuccess(f, d, xhr) {
            if (this.mailTimer) {
                this.mailTimer.start();
            }

            const toast = this.toast.create({
                text: this.methods.getResponseText(xhr, 'Email has been send.')
            });

            toast.open();

            this.preloader.hide();
        },

        formAjaxError(f, d, xhr) {
            this.preloader.hide();

            const toast = this.toast.create({
                text: this.methods.getResponseText(
                    xhr,
                    'Email has not been send. Please, check your network and try again.'
                ),
                cssClass: 'error'
            });

            toast.open();
        }
    },
    methods: {
        getResponseText(xhr, dummy) {
            let text;

            try {
                text = JSON.parse(xhr.responseText).text;
            } catch (e) {
                text = dummy
            }

            return text;
        }
    }
});

app.mailTimer = new MailTimer(60, app);

app.views.create('.view-main', {
    url: '/',
    iosSwipeBack: false,
    preloadPreviousPage: false
});

app.t7.registerPartial('table-body', tableBody);

export default app;
