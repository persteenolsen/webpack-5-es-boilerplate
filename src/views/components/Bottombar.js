let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer">
            <div class="content has-text-centered">
			    <br />
                <p>
                    <h2>Webpack 5 configured to serve modern JavaScript</h2>
                </p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;