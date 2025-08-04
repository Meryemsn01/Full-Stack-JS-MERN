const XLSX = require('xlsx');
const inputFile = './employee_data_.xlsx';
const outputFile = './employee_data_with_bonus.xlsx'; 
try {
    const workbook = XLSX.readFile(inputFile);
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    jsonData.forEach(employee => {
        if (employee.AnnualSalary < 50000) {
            employee.BonusPercentage = 5; 
            employee.BonusAmount = employee.AnnualSalary * (employee.BonusPercentage/100)
        } else if (employee.AnnualSalary >= 50000 && employee.AnnualSalary < 100000) {
            employee.BonusPercentage = 7; 
            employee.BonusAmount = employee.AnnualSalary * (employee.BonusPercentage/100)
        } else if (employee.AnnualSalary >= 100000) {
            employee.BonusPercentage = 10; 
            employee.BonusAmount = employee.AnnualSalary * (employee.BonusPercentage/100)
        } else {
            employee.BonusPercentage = 0; 
        }
    });
    console.log(jsonData);

    const newWorksheet = XLSX.utils.json_to_sheet(jsonData);
    const newWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Employees With Bonus");
    XLSX.writeFile(newWorkbook, outputFile);

    console.log(`Successfully  to ${outputFile}`);
} catch (error) {
    console.error("An error occurred:", error);
}