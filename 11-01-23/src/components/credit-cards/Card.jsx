import { useFetch } from "../../hooks/use-fetch";
import { ENDPOINTS } from "../../constants/endpoints";
import "./card.css";

export function Cards() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.CREDITCARD);

  if (loading) return <div className="loading-card">Loading</div>;

  if (error) return `Errore!`;

  return (
    <><section className="cards-div">
      <div className="container-card">
        <div className="card">
          <div className="title"></div>
          <div className="chip"></div>
          <div className="valid-dates"></div>
          <div className="valid-dates-icon"></div>
          <div className="valid-dates-date"></div>
        </div>
      </div>
      <div>
        <h1>CREDIT CARD</h1>
        <h2>Number: {data?.credit_card_number}</h2>
        <h2 className="date">Expiry Date: {data?.credit_card_expiry_date}</h2>
        <h2 className="type">Type: {data?.credit_card_type}</h2>
      </div>
    </section><button onClick={refetch}>Rigenera</button></>
  );
}
