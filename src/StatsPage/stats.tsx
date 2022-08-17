import './stats.css'


const Stats = () => {
    return(
        <div>
            <h1>Stats</h1>
            <section className='topContainer'>
                <section className='topColumn'>
                    <NumberModule />
                    <NumberModule />
                </section>
                <section className='topColumn'>
                    <NumberModule />
                    <NumberModule />
                </section>
                <section className='topColumn'>
                    <NumberModule />
                    <NumberModule />
                </section>
                <section className='topColumn'>
                    <BlockModule />
                </section>
            </section>
            <section className='bottomContainer'>
                <section className='topColumn'>
                    <BigStatModule />
                    <BigStatModule />
                </section>
                <section className='topColumn'>
                    <SmallStatModule />
                    <SmallStatModule />
                </section>
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
        <section className='blockModuleContainer'>
            <div className='padding'></div>
            <div className='bigRatio'></div>
            <div className='padding'></div>
            <h4>A pie chart</h4>
            <div>Male: 60%</div>
            <div>Female: 40%</div>
        </section>
    )
}

const BigStatModule = () => {
    return (
        <section className='bigStatModule'>

        </section>
    )
}

const SmallStatModule = () => {
    return (
        <section className='smallStatModule'>

        </section>
    )
}

export default Stats