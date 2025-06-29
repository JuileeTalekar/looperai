# CSV Import/Export Format Guide

This document describes the proper CSV formatting for importing and exporting transaction data in LooperAI.

## 📊 Transaction CSV Format

### Headers (Required)
The CSV file must include the following headers in the exact order shown:

```csv
userId,amount,category,type,description,date
```

### Field Specifications

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `userId` | String | Yes | Unique identifier of the user | `john_doe` |
| `amount` | Number | Yes | Transaction amount (positive numbers) | `150.75` |
| `category` | String | Yes | Transaction category | `Food`, `Transportation`, `Entertainment` |
| `type` | String | Yes | Transaction type (`income` or `expense`) | `expense` |
| `description` | String | No | Transaction description | `Lunch at downtown restaurant` |
| `date` | Date | Yes | Transaction date (YYYY-MM-DD format) | `2025-06-30` |

### Sample CSV File

```csv
userId,amount,category,type,description,date
john_doe,50.25,Food,expense,Breakfast at cafe,2025-06-30
john_doe,2500.00,Salary,income,Monthly salary deposit,2025-06-01
jane_smith,75.50,Transportation,expense,Gas station fill-up,2025-06-29
john_doe,120.00,Entertainment,expense,Movie tickets and popcorn,2025-06-28
jane_smith,1200.00,Freelance,income,Client project payment,2025-06-25
john_doe,300.00,Shopping,expense,Grocery shopping weekly,2025-06-27
```

## 📥 Importing Transactions

### File Requirements
- **Format**: CSV (Comma Separated Values)
- **Encoding**: UTF-8
- **File Extension**: `.csv`
- **Maximum File Size**: 10MB
- **Maximum Rows**: 10,000 transactions per file

### Data Validation Rules

#### Amount Field
- Must be a positive number
- Maximum 2 decimal places
- Range: 0.01 to 999,999.99
- **Valid**: `150.75`, `50`, `1234.56`
- **Invalid**: `-50.25`, `abc`, `1000000.00`

#### Category Field
- Maximum 50 characters
- Alphanumeric characters and spaces allowed
- **Valid**: `Food`, `Transportation`, `Home & Garden`
- **Invalid**: `Food@#$`, `''`, (empty string)

#### Type Field
- Must be exactly `income` or `expense` (case-sensitive)
- **Valid**: `income`, `expense`
- **Invalid**: `Income`, `EXPENSE`, `spending`

#### Date Field
- Format: `YYYY-MM-DD`
- Must be a valid date
- Range: 1900-01-01 to current date + 1 year
- **Valid**: `2025-06-30`, `2024-12-25`
- **Invalid**: `06/30/2025`, `2025-13-01`, `30-06-2025`

#### Description Field
- Optional field
- Maximum 200 characters
- Can contain letters, numbers, spaces, and basic punctuation
- **Valid**: `Lunch at restaurant`, `Gas station - Shell #123`, (empty)
- **Invalid**: Strings longer than 200 characters

### Error Handling
If validation fails, the system will:
1. Return a detailed error report
2. Specify the row number and field with the error
3. Provide the expected format
4. Not import any transactions until all errors are fixed

### Example Error Response
```json
{
  "success": false,
  "message": "CSV validation failed",
  "errors": [
    {
      "row": 3,
      "field": "amount",
      "value": "-50.25",
      "error": "Amount must be a positive number"
    },
    {
      "row": 5,
      "field": "type",
      "value": "spending",
      "error": "Type must be either 'income' or 'expense'"
    }
  ]
}
```

## 📤 Exporting Transactions

### Export Format
When exporting transactions, the system will generate a CSV file with:
- All required headers
- Data formatted according to the specifications above
- UTF-8 encoding
- Proper escaping for special characters

### Exported File Name Convention
```
transactions_[userId]_[YYYY-MM-DD].csv
```

Example: `transactions_john_doe_2025-06-30.csv`

### Sample Export
```csv
userId,amount,category,type,description,date
john_doe,50.25,Food,expense,"Breakfast at ""Joe's Cafe""",2025-06-30
john_doe,2500.00,Salary,income,Monthly salary deposit,2025-06-01
john_doe,75.50,Transportation,expense,Gas station fill-up,2025-06-29
```

## 🔧 Advanced Formatting

### Handling Special Characters
- **Commas in values**: Wrap the field in double quotes
  ```csv
  john_doe,25.50,Food,expense,"Pizza, large pepperoni",2025-06-30
  ```

- **Quotes in values**: Escape with double quotes
  ```csv
  john_doe,15.75,Food,expense,"Lunch at ""Tony's Deli""",2025-06-30
  ```

- **Line breaks in descriptions**: Replace with spaces or use \n
  ```csv
  john_doe,100.00,Shopping,expense,"Groceries: milk bread eggs",2025-06-30
  ```

### Multiple User Import
For importing transactions for multiple users in one file:
```csv
userId,amount,category,type,description,date
john_doe,50.25,Food,expense,Breakfast,2025-06-30
jane_smith,75.00,Transportation,expense,Taxi ride,2025-06-30
mike_jones,200.00,Entertainment,expense,Concert tickets,2025-06-29
```

## 🚀 Best Practices

### Data Preparation
1. **Clean your data** before importing
2. **Validate dates** to ensure they're in the correct format
3. **Check for duplicates** to avoid importing the same transaction twice
4. **Use consistent categories** for better analytics
5. **Keep descriptions concise** but descriptive

### Performance Tips
1. **Batch imports** of 1,000 transactions or less for optimal performance
2. **Sort by date** for chronological order
3. **Group by user** when importing multiple users

### Common Mistakes to Avoid
- Don't include currency symbols ($, €, £) in amount fields
- Don't use different date formats in the same file
- Don't leave required fields empty
- Don't include headers multiple times in the same file
- Don't mix transaction types in the type field

## 📋 Template Files

### Basic Template
```csv
userId,amount,category,type,description,date
your_user_id,0.00,Category,expense,Description here,2025-06-30
```

### Sample Data Template
```csv
userId,amount,category,type,description,date
sample_user,50.00,Food,expense,Sample restaurant meal,2025-06-30
sample_user,3000.00,Salary,income,Monthly salary,2025-06-01
sample_user,25.99,Transportation,expense,Bus monthly pass,2025-06-01
sample_user,150.00,Utilities,expense,Electricity bill,2025-06-15
sample_user,500.00,Freelance,income,Side project payment,2025-06-20
```

## 🛠️ Tools and Utilities

### Recommended CSV Editors
- **Microsoft Excel** - Popular spreadsheet application
- **Google Sheets** - Web-based spreadsheet tool
- **LibreOffice Calc** - Free alternative to Excel
- **VS Code** - With CSV extension for text editing

### Validation Tools
Before importing, you can validate your CSV using:
- Online CSV validators
- Excel data validation features
- Custom scripts for data checking

---

**Need Help?** 
- Check the API documentation for programmatic import/export
- Create an issue in the GitHub repository for CSV-related problems
- Contact support for large-scale data migration assistance
