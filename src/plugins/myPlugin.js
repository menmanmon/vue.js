export default {
    install(Vue) {
        if (this.installed) {
            return
        }

        this.installed = true

        Vue.prototype.$modal = {
            EventBus: new Vue(),
            show(settings) {
                // сообщаем, что наступило событие shown
                // вместе с событием передаем параметры из аргументов функции
                this.EventBus.$emit('shown', { ...settings })
            },
            hide() {
                // сообщаем, что наступило событие hide
                this.EventBus.$emit('hide')
            }
        }
    }
}
