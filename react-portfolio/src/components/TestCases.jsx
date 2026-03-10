import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const TestCases = () => {
    const testData = [
        { id: "TC_001", module: "Login", steps: "1. Enter valid email\n2. Enter valid password\n3. Click Login", expected: "User is successfully authenticated and redirected to dashboard.", status: "Pass" },
        { id: "TC_002", module: "Checkout", steps: "1. Add item to cart\n2. Proceed to checkout\n3. Select payment method\n4. Confirm order", expected: "Order is successfully placed and Order ID is generated.", status: "Pass" },
        { id: "TC_003", module: "API - Order", steps: "Send POST request to /api/v1/orders with missing 'product_id' in JSON payload.", expected: "API should return 400 Bad Request with validation error message.", status: "Pass" },
        { id: "TC_004", module: "Search", steps: "Enter special characters (!@#$) in search bar and submit.", expected: "System handles input gracefully without SQL injection vulnerabilities.", status: "Pass" },
        { id: "TC_005", module: "Payment", steps: "Process payment with an expired credit card.", expected: "Payment gateway declines and shows 'Card Expired' error.", status: "Fail" }
    ];

    return (
        <section className="py-20 bg-white dark:bg-qa-card/50 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-8">

                <div className="mb-10 lg:flex justify-between items-end">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                            Sample Test Cases (Documentation)
                        </h2>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">
                            Excerpt from a standard test execution matrix demonstrating clear steps and expected outcomes.
                        </p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto qa-card"
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                                <th className="p-4 font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Test Case ID</th>
                                <th className="p-4 font-semibold text-slate-700 dark:text-slate-300">Module</th>
                                <th className="p-4 font-semibold text-slate-700 dark:text-slate-300">Test Steps</th>
                                <th className="p-4 font-semibold text-slate-700 dark:text-slate-300">Expected Result</th>
                                <th className="p-4 font-semibold text-slate-700 dark:text-slate-300">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {testData.map((tc, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                                    <td className="p-4 font-mono text-sm text-qa-blue dark:text-qa-blue">{tc.id}</td>
                                    <td className="p-4"><span className="qa-badge">{tc.module}</span></td>
                                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400 whitespace-pre-line">{tc.steps}</td>
                                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{tc.expected}</td>
                                    <td className="p-4">
                                        {tc.status === "Pass" ? (
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase">
                                                <Check size={14} /> Pass
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 text-xs font-bold uppercase">
                                                <X size={14} /> Fail
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

            </div>
        </section>
    );
};

export default TestCases;
