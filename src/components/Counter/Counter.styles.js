// CSS-in-JS
const counter = {
    position: 'absolute',
    left: '50%',
    top: 100,
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    border: '1px dashed silver',
    overflow: 'hidden',
    borderRadius: 8
};

const btn = {
    width: 100,
    height: 35,
    backgroundColor: 'deepskyblue',
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    fontSize: 16,
    outline: 'none',
    overflow: 'hidden',
    borderRadius: 8
};

const spanState = {
    width: 50,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: 'deepskyblue',
    textAlign: 'center',
}

export default {counter, btn, spanState};