import React from 'react'

const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            Try saying: <br /> 
            Add  {isIncome ? 'Income ' : 'Expense '}
            for {isIncome ? '500 ' : '3500 '} shillings
            in category {isIncome ? 'Salary ' : 'Pets '}
            for {isIncome ? 'Monday' : 'Thursday'}...
        </div>
    )
}

export default InfoCard
