let dangerBtn = "cuidado, cão bravo";

export function BtnComponent1() {
  return (
    <div>
      <button type="button" class="btn btn-danger">
        {dangerBtn}
      </button>
    </div>
  );
}

export const BtnComponent2 = ({ props }) => {
  return <button className="btn btn-primary">{props}</button>;
};
