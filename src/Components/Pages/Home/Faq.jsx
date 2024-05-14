import React from 'react';

const Faq = () => {
    return (
        <div className='space-y-3 mt-8'>
            <div>
                <h3 className='md:text-3xl text-xl font-bold font-lato text-center my-5'>Frequently Asked Questions</h3>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    What is an alternate product?
                </div>
                <div className="collapse-content">
                    <p>Alternate products consist of one or more components that make up the managed product. Alternate products are often used when you do not stock the complete product but stock all the product components.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What is an example of an alternative for a product?
                </div>
                <div className="collapse-content">
                    <p>This means if the price of one product increases, the demand for the other increases. For example, coffee can be said to be a substitute for tea, and solar energy is a substitute for electricity. If the price of coffee goes up, the demand for tea goes up, too, and vice versa.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What is alternative use?
                </div>
                <div className="collapse-content">
                    <p>Alternative uses refer to the ability to see or imagine different functions or purposes for common objects beyond their intended use.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;