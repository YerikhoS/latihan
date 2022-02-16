import SideBar from "../../components/oragnisms/SideBar";
import TransactionsContent from "../../components/oragnisms/TransactionContent";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionsContent />
    </section>
  );
}
