



const Shows = ({ shows }) => {
    return shows.map((show) => (
      <div key={show.id} className="shows">
        <img src={show.image} alt={show.name} />
        <h1>{show.name}</h1>
      </div>
    ));
  };

export default Shows
