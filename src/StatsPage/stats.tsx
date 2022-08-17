import './stats.css'

const Stats = () => {
    return(
        <div>
            <h1>Stats</h1>
            <section className='topmodulecontainer'>
                <section className='numberModulesContainer'>
                    <NumberModule />
                    <NumberModule />
                    <NumberModule />
                    <NumberModule />
                    <NumberModule />
                    <NumberModule />
                </section>
                <BlockModule />
            </section>
        </div>
    )

}

const NumberModule = () => {
    return (
        <section className='numberModuleContainer'>
            <h4>132</h4>
            <h6>Head count</h6>
        </section>
    )
}

const BlockModule = () => {
    return (
        <section className='bignumberModuleContainer'>
            <h4>132</h4>
            <h6>Head count</h6>
        </section>
    )
}

export default Stats