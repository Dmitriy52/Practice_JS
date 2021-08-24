const EventEmitter = require('events');

const emitter = new EventEmitter();
// //слушаем событие
// emitter.on('anything', (data) => {
//     console.log('ON: anything', data);
// })
// //работаем с откликом на событие
// emitter.emit('anything', {a:1});
// emitter.emit('anything', {b:1});

// setTimeout(()=>{
//     emitter.emit('anything', {c:1});
// }, 500);

class Dispatcher extends EventEmitter{
    subscribe(eventName, callback){
        console.log('[Subscribe...]');
        this.on(eventName,callback);
    }

    dispatch(eventName, data){
        console.log('[dispatching...]');
            this.emit(eventName,data);
    }
}

const disp = new Dispatcher();
disp.subscribe('aa', (data) =>{
    console.log('ON: aa', data);
});
disp.dispatch('aa', {aa: 22});