function Message({ type }) {
  return (
    <div>
      {type === "success" && <p>Succès ! Tu as raison </p>}
      {type === "error" && <p>Erreur ! Reessaye t'y est presque </p>}
    </div>
  );
}

export default Message;
