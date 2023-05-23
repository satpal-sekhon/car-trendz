import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import { Card, CardHeader, Typography } from "@mui/material";

export default function UserList() {
    const columns = [
        { field: "id", headerName: "ID", width: 10 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params: any) => {
                console.log(params);
                return (
                    <>
                        <Avatar src={params.value.avatar} />
                        {params.value.username}
                    </>
                );
            }
        },
        { field: "price", headerName: "Price", width: 100 },
        {
            field: "Order",
            headerName: "Order",
            width: 90
        },
        {
            field: "stock",
            headerName: "stock",
            width: 100
        },
        {
            field: "amount",
            headerName: "Amount",
            width: 100
        }
    ];

    const rows = [
        {
            id: 1,
            user: {
                username: "Harry Potter",
                avatar:
                    "https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png"
            },
            price: "$180",
            Order: "Active",
            stock: "$120",
            amount: "$120"
        },
        {
            id: 2,
            user: {
                username: "Harry Potter",
                avatar:
                    "https://themesbrand.com/velzon/html/default/assets/images/products/img-2.png"
            },
            price: "$160",
            Order: "Active",
            stock: "$120",
            amount: "$120"
        },
        {
            id: 3,
            user: {
                username: "Harry Potter",
                avatar:
                    "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png"
            },
            price: "$120",
            Order: "Active",
            stock: "$120",
            amount: "$120"
        },
        {
            id: 4,
            user: {
                username: "Harry Potter",
                avatar:
                    "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png"
            },
            price: "$140",
            Order: "Active",
            stock: "$120",
            amount: "$120"
        },
    ];

    return (
        <div className="bg-white">
            <Card>
                <CardHeader
                    subheader="Best Selling Products"
                />
                <DataGrid
                    autoHeight
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </Card>
        </div>
    );
}
