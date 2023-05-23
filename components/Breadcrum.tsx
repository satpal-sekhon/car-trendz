import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

interface breadcrumbProps {
    breadcrumb1: string;
    breadcrumb2: string;
    breadcrumb3: string;
    breadcrumb4: string;
    breadcrumbend: string;

}

export default function BasicBreadcrumbs({ breadcrumb1, breadcrumb2,breadcrumb3,breadcrumb4, breadcrumbend }: breadcrumbProps) {
    return (
        <div role="presentation" onClick={handleClick} className='my-5'>
            <Breadcrumbs aria-label="breadcrumb" className='font-bold'>
                <Link underline="hover" color="inherit" href="/">
                    {breadcrumb1}
                </Link>
                {breadcrumb2 && <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    {breadcrumb2}
                </Link>
                }
                {breadcrumb3 && <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    {breadcrumb3}
                </Link>
                }
                {breadcrumb4 && <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    {breadcrumb4}
                </Link>
                }
                {breadcrumbend && <Typography color="text.primary" className='font-bold'>{breadcrumbend}</Typography>}
            </Breadcrumbs>
        </div>
    );
}