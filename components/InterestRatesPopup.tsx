import React from 'react';

const InterestRatesPopup: React.FC = () => {
  // Your component logic here

  return (
    <div>
      <div className='sm mb-8'>
        <h5 className='mb-2'>Fixed Deposit Rates</h5>
        <p>The fixed deposit interest rate for retail investors stands revised from 09th Oct, 2023 as follows:</p>
      </div>
      <table className='small'>
        <thead>
          <tr>
            <th scope="col">Tenure</th>
            <th className='text-center' scope="col">General rates (% p.a.)</th>
            <th className='text-center' scope="col">Senior citizens rates (% p.a.)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7-14 days</td>
            <td className="text-center">4.50</td>
            <td className="text-center">4.50</td>
          </tr>
          <tr>
            <td>15-45 days</td>
            <td className="text-center">4.75</td>
            <td className="text-center">4.75</td>
          </tr>
          <tr>
            <td>46-60 days</td>
            <td className="text-center">5.25</td>
            <td className="text-center">5.75</td>
          </tr>
          <tr>
            <td>61-90 days</td>
            <td className="text-center">5.50</td>
            <td className="text-center">6.00</td>
          </tr>
          <tr>
            <td>91-164 days</td>
            <td className="text-center">5.75</td>
            <td className="text-center">6.25</td>
          </tr>
          <tr>
            <td>165 days to 6 months</td>
            <td className="text-center">5.75</td>
            <td className="text-center">6.25</td>
          </tr>
          <tr>
            <td>Over 6 months to 201 days</td>
            <td className="text-center">8.75</td>
            <td className="text-center">9.25</td>
          </tr>
          <tr>
            <td>202-364 days</td>
            <td className="text-center">6.75</td>
            <td className="text-center">7.25</td>
          </tr>
          <tr>
            <td>1 year</td>
            <td className="text-center">7.35</td>
            <td className="text-center">7.85</td>
          </tr>
          <tr>
            <td>1 year 1 day</td>
            <td className="text-center">7.35</td>
            <td className="text-center">7.85</td>
          </tr>
          <tr>
            <td>Over 1 year 1 day to 500 days</td>
            <td className="text-center">7.35</td>
            <td className="text-center">7.85</td>
          </tr>
          <tr>
            <td>501 days</td>
            <td className="text-center">8.75</td>
            <td className="text-center">9.25</td>
          </tr>
          <tr>
            <td>502 days to 18 months</td>
            <td className="text-center">7.35</td>
            <td className="text-center">7.85</td>
          </tr>
          <tr>
            <td>Over 18 months to 700 days</td>
            <td className="text-center">7.40</td>
            <td className="text-center">7.90</td>
          </tr>
          <tr>
            <td>701 days</td>
            <td className="text-center">8.95</td>
            <td className="text-center">9.45</td>
          </tr>
          <tr>
            <td>702 days to 1000 days</td>
            <td className="text-center">7.40</td>
            <td className="text-center">7.90</td>
          </tr>
          <tr>
            <td>1001 days</td>
            <td className="text-center">9.00</td>
            <td className="text-center">9.50</td>
          </tr>
          <tr>
            <td>1002 days to 3 years</td>
            <td className="text-center">7.65</td>
            <td className="text-center">8.15</td>
          </tr>
          <tr>
            <td>Over 3 years to 5 years</td>
            <td className="text-center">7.65</td>
            <td className="text-center">8.15</td>
          </tr>
          <tr>
            <td>Over 5 years to 10 years</td>
            <td className="text-center">7.00</td>
            <td className="text-center">7.50</td>
          </tr>
        </tbody>
      </table>
      <ol className='mt-12 list-decimal ml-4'>
        <li className='text-sm pl-3'>For terms & conditions and any other detail, please contact Unity SFB branch officials.</li>
        <li className='text-sm pl-3'>Interest rates are subject to change without prior notice.</li>
        <li className='text-sm pl-3'>The above card rates are applicable for recurring deposits (Specific Tenors).</li>
        <li className='text-sm pl-3'>For premature withdrawal of fixed deposit and recurring deposits, a premature penalty of 1.00% shall be charged to the rate applicable for the period the deposit has remained with the bank, or the contracted rate, whichever is lower.</li>
        <li className='text-sm pl-3'>We hereby offer 1% more over Card Rates to Unity SFB employees.</li>
      </ol>
    </div>
  );
};

export default InterestRatesPopup;