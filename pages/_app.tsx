/**
 * this is a the setup of the background of the main website page
 * all components will be contained within this page, and imported like objects
 */

import '../styles/globals.css'

const App  = () => {
    return (
        <div id='background'>
            <h1>HEADING!</h1>
            <p>this is a sentence with a test <a href='https://example.com/' target='_blank'>LINK</a> </p>
        </div>
    )
}

export default App