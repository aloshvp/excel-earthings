import Image from 'next/image'

const ViewOurProfile = () => {
    return (
        <section className='viewOurProfileWrap'>
            <div className="viewOurProfileBody">
                <h2 className='homeCmnHead'>View Our Profile</h2>
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/icons/arrow-play-button.svg`}
                    alt="Play Button"
                    width={50}
                    height={50}
                />

                <span>Watch Corporate Video</span>
            </div>
        </section>
    )
}

export default ViewOurProfile