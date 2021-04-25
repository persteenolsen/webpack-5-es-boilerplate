let Error404 = {

    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h2> 404 Error </h2>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }
}
export default Error404;