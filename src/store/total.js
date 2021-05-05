export function total (store) {
    store.on('@init', () => ({
        total: 0
    }));

    store.on('total/update', ({ total }, tot) => {
        return { total : tot }
    });
}

export default total;