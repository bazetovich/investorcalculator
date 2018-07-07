const ONE_SEC = 1000;
const ZERO = 0;

class MailTimer {

    constructor(limit, app) {
        this.defaultOutputMsg = '';
        this.outputWrap = null;
        this.timer = null;

        this.app = app;

        this.limit = limit;
        this.interval = ONE_SEC;
        this.current = limit;
    }

    setOutputWrap(node) {
        this.outputWrap = node;
    }

    setDefaultOutputMsg(msg) {
        this.defaultOutputMsg = msg;
    }

    markTiming(force) {
        if (this.outputWrap) {
            if (this.timer || force) {
                this.outputWrap.addClass('timing');
            }
            else {
                this.outputWrap.removeClass('timing');
            }
        }
    }

    updateMsg(force) {
        if (this.outputWrap) {
            if (this.timer || force) {
                this.outputWrap.text('You can mail after: ' + this.current + ' sec');
            }
            else {
                this.outputWrap.text(this.defaultOutputMsg);
            }
        }
    }

    clearInterval() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
            this.current = this.limit;
        }
    }

    start() {
        const _this = this;

        this.clearInterval();
        this.updateMsg(true);
        this.markTiming(true);

        this.timer = setInterval(() => {
            this.current--;

            if (this.current === ZERO) {
                _this.clearInterval();
            }

            _this.updateMsg();
            _this.markTiming();

        }, this.interval);
    }

}

export default MailTimer;
