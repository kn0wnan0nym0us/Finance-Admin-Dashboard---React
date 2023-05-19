import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-2">
          <h1 className="text-2xl font-bold">Finance Admin Dashboard</h1>
        </nav>
      </header>
      <main className="container mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-xl font-bold mb-2">Income</h2>
            <p>Total Income: $10,000</p>
            <p>Income Trends: ...</p>
          </div>
          <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-xl font-bold mb-2">Expenses</h2>
            <p>Total Expenses: $5,000</p>
            <p>Expense Breakdown: ...</p>
          </div>
          <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-xl font-bold mb-2">Profit & Loss</h2>
            <p>Net Profit: $5,000</p>
            <p>Profit Margin: 50%</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Financial Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow rounded-md">
              <h3 className="text-lg font-bold mb-2">Monthly Report</h3>
              <p>Generate a monthly financial report.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4">
                Generate Report
              </button>
            </div>
            <div className="bg-white p-4 shadow rounded-md">
              <h3 className="text-lg font-bold mb-2">Yearly Report</h3>
              <p>Generate a yearly financial report.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
