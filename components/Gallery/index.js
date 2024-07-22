"use client";
const Gallery = () => {
    return <div className="grid grid-cols-2 gap-4 md:grid-cols-3 m-3">
        <div className="grid gap-4">
            <div>
                <img
                    className="object-cover object-start w-full h-auto max-w-full rounded-lg"
                    src={`/images/img/16.jpeg`}
                    alt="gallery-photo"
                />
            </div>
            <div>
                <img
                    className="object-cover object-start w-full h-auto max-w-full rounded-lg"
                    src={`/images/img/12.jpeg`}
                    // src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                    alt="gallery-photo"
                />
            </div>


            <div>
                <img
                    className="object-cover object-start w-full h-auto max-w-full rounded-lg"
                    src={`/images/img/14.jpeg`}
                    alt="gallery-photo"
                />
            </div>
        </div>
        <div className="grid gap-4">
            <div>
                <img
                    className="object-cover object-start w-full h-auto max-w-full rounded-lg"
                    src={`/images/img/15.jpeg`}
                    alt="gallery-photo"
                />
            </div>

            <div>
                <img
                    className="object-cover object-start w-full h-auto max-w-full rounded-lg"
                    src={`/images/img/16.jpeg`}
                    alt="gallery-photo"
                />
            </div>
            <div>
                <img
                    className="object-cover object-start w-full h-auto max-w-full rounded-lg"
                    src={`/images/img/17.jpeg`}
                    alt="gallery-photo"
                />
            </div>
        </div>
        <div className="grid gap-4">
            <div>
                <img
                    className="object-cover object-start w-full h-auto max-w-full rounded-lg"
                    src={`/images/img/18.jpeg`}
                    alt="gallery-photo"
                />
            </div>
            <div>
                <img
                    className="object-cover object-start w-full h-auto max-w-full rounded-lg "
                    src={`/images/img/19.jpeg`}
                    alt="gallery-photo"
                />
            </div>

            <div>
                <img
                    className="object-cover object-start w-full h-auto max-w-full rounded-lg "
                    src={`/images/img/13.jpeg`}
                    alt="gallery-photo"
                />
            </div>
        </div>

    </div>
}
export default Gallery;