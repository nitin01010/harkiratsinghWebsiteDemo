"use client";

const Button = () => {
    return (
        <button
            type="button"
            className="inline-block capitalize bg-blue-600 w-[100%] rounded-full bg-primary px-7 pb-2.5 pt-3 text-sm font-medium hover:bg-blue-700  leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
            View Details
        </button>
    )
}

export default Button