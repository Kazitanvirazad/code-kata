
const BalanceSheetTableBody = (tableData) => {
    return (
        <>
            <tbody>
                {tableData.balanceData.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.year}</td>
                            <td>{item.month}</td>
                            <td>{item.profitOrLoss}</td>
                            <td>{item.assetsValue}</td>
                        </tr>
                    )
                })}
            </tbody>
        </>
    );
};

export default BalanceSheetTableBody;