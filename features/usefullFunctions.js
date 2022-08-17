const parsIsoDate = (date) => {
    const months = [
      "Janury",
      "Februry",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const a = new Date(date);
    const year = a.getFullYear();
    const month = a.getMonth();
    const day = a.getDay();
    return `${months[month - 1]} ${day} ,${year}`;
  };
  export{parsIsoDate}