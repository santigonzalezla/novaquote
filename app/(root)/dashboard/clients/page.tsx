import styles from './page.module.css'
import TableClient from "@/app/components/clients/table/TableClient";
import ClientFilter from "@/app/components/clients/clientfilter/ClientFilter";

const Clients = () =>
{
    return (
        <div className={styles.client}>
            <ClientFilter />
            <TableClient />
        </div>
    );
}

export default Clients;