import { Alert } from "../ui/Alert";

const Alerts = (obj: { alerts: [] }) => {
  const hasAlerts: boolean = obj.alerts.length > 0;
  const alerts = obj.alerts;

  return (
    <div>
      {hasAlerts ? (
        alerts.map((alert: { description: string; headline: string }) => {
          return <Alert desc={alert.description} head={alert.headline} />;
        })
      ) : (
        <p>No Alerts!</p>
      )}
    </div>
  );
};
export default Alerts;
