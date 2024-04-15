import Button from "./button"

const Card = () => {
    return (
        <div
            className="block border rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <img
                className="rounded-t-lg"
                src="/imgcouse2.jpeg"
                alt="Thumnail" />
            <div className="p-6 text-surface dark:text-white">
                <h5 className="mb-2 text-xl font-medium leading-tight">Live 0-100 Complete</h5>
                <p className="mb-4 text-base">
                    Go from 0 to 100 with Harkirat Singh Live. Learn basics to a..
                </p>
                <span className=" mb-3 flex gap-3  justify-between">
                    <div className=" flex gap-2">
                        <h2 className=" font-semibold text-black">₹5599</h2>
                        <h3 className=" font-extralight text-gray-500"><del>7999</del></h3>
                    </div>
                    <h2 className=" font-semibold text-green-400">30.00% off</h2>
                </span>
                <Button />
            </div>
        </div>
    )
}

export default Card