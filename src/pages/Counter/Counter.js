import React from 'react';
import './Counter.css';
import CounterItem from './CounterItem';


const Counter = () => {
    return (
        <div className='counter-container w-100 py-5'>
            <div className='counter-header text-center mb-5'>
                <h1>Counter</h1>
            </div>
            <div className='counter-items-container p-3'>
                <div className='text-center row'>
                    <CounterItem
                        end={94}
                        title={'Completed Order'}
                        info={`When it comes to provide quality service, we don't compromise.'`}
                    />
                    <CounterItem
                        end={52}
                        title={'Masters of Repair'}
                        info={'Our masters are fully experienced and certified.'}
                    />
                    <CounterItem
                        end={25}
                        title={'Our Partner'}
                        info={'We possess a great bonding that reflects on our partnership numbers.'}
                    />
                    <CounterItem
                        end={230}
                        title={'Active Users'}
                        info={'We are pleased to help our customers with their daily life inconveniences.'}
                    />

                </div>
            </div>
        </div>
    );
};

export default Counter;