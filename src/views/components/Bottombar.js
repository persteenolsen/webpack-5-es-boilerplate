let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer">
            <div>
			    <br />
                <p>
                 A single page application made in Vanilla JS
                </p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;