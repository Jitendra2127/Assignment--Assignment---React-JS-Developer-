import React from "react";
import DataTable from "react-data-table-component";
// import ind from '../../assets/images/'

const Table = () => {
    // Example dataset for the table
    const data = [
        { id: 1, image:'1.jpg', name: "Wade Warren", orderNo: "1299250", amount: "$393", status: "Delivered"  },
        { id: 2, image:'2.jpg', name: "Jane Cooper", orderNo: "2002029", amount: "$383", status: "Delivered" },
        { id: 3, image:'3.jpg', name: "Guy Demo", orderNo: "2993202", amount: "$393", status: "Cancelled" },
        { id: 3, image:'1.jpg', name: "Gaurav Kumar", orderNo: "2993202", amount: "$393", status: "Pending" },
        { id: 2, image:'2.jpg', name: "Mohan Kumar", orderNo: "2002029", amount: "$383", status: "Delivered" },
        { id: 2, image:'3.jpg', name: "Ankit Jha", orderNo: "2002029", amount: "$383", status: "Delivered" },
        { id: 1, image:'1.jpg', name: "Wade Warren", orderNo: "1299250", amount: "$393", status: "Delivered"  },
        { id: 2, image:'2.jpg', name: "Jane Cooper", orderNo: "2002029", amount: "$383", status: "Delivered" },
        { id: 3, image:'3.jpg', name: "Guy Demo", orderNo: "2993202", amount: "$393", status: "Cancelled" },
    ];

    // Define columns
    const columns = [
        {
            name: "Customer",
            selector: (row, index) => (
                <div className="space-x-2 flex items-center">
                    {/* <span className=" border">sks</span> */}
                    <div className=" ">

                        <img src={`images/${row.image}`} alt="adasd" className="sm:w-10 w-0  rounded" />
                    </div>
                    <span>{row.name}</span>
                </div>
            ),
            sortable: true,
          
            

        },
        {
            name: "Order No.",
            selector: (row, index) => row.orderNo,
            sortable: true,

        },
        {
            name: "Amount",
            selector: (row, index) => row.amount,
            sortable: true,

        },

        {
            name: "Status",
            selector: (row) => (
                <div className={`   px-2 rounded-xl py-0.5  ${row.status === "Delivered" ? "bg-green-500 text-green-300" : "bg-red-500 text-red-300"}`}>
                    {row.status}
                </div>
            ),
            sortable: true,
        },
    ];

    const customStyles = {
        header: {
          style: {
            backgroundColor: "#6b7280", // Header background color
            color: "#FFF", // Header text color
            fontSize: "16px",
            fontWeight: "bold",
          },
        },
        rows: {
          style: {
            backgroundColor: "#6b7280", // Row background color
            color: "#fff", // Row text color
            '&:hover': {
              backgroundColor: "#E8F4FF", // Row hover background color
            },
          },
        },
        headCells: {
          style: {
            backgroundColor: "#6b7280", // Header cell background color
            color: "#FFF", // Header cell text color
            fontSize: "14px",
            fontWeight: "600",
          },
        },
        cells: {
          style: {
            padding: "10px", // Cell padding
            fontSize: "13px",
          },
        },
      };

    return (
        <div className="  ">

            <DataTable
                columns={columns}
                data={data} // Replace this with filtered data if needed

                highlightOnHover
                // striped 
                responsive
                customStyles={customStyles}
            />
        </div>
    );
};

export default Table;
