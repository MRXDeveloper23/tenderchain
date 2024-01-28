export const BidPage = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-4 bg-white p-4 rounded-[6px] text-blue-700 text-[20px]">
        <div className="flex justify-between">
          <span className="tender-id bg-green-300 text-green-700 rounded-lg p-2">
            283559
          </span>
          <div className="flex gap-4">
            <span className="tender-status bg-green-400 p-2 rounded-lg text-white">
              Open
            </span>
            <span className="tender-created-date">09.08.2023</span>
          </div>
        </div>
        <p className="tender-description">
          Покупка Серверов для DATA-центра (по аналогии с Amazon.com) для
          создания единой торговой онлайн-площадки в международной и Центральной
          Азии
        </p>
      </div>
      <form className="flex flex-col gap-4 mt-6 bg-base-300 p-4 rounded-[6px] text-white text-[20px]">
        <div className="flex gap-4">
          <label htmlFor="amount">Talab etilgan qiymat</label>
          <input type="checkbox" id="amount" name="amount" className="" />
        </div>
        <div className="flex gap-4">
          <label htmlFor="amount">Zaruriyligi</label>
          <select id="priority" className="priority " placeholder="">
            <option>Zarur</option>
          </select>
        </div>
        <div className="flex gap-4">
          <label htmlFor="min">Min. ball</label>
          <input id="min" type="number" min={0} max={20} />
        </div>
        <div className="flex gap-4">
          <label htmlFor="max">Max. ball</label>
          <input id="max" type="number" min={0} max={20} />
        </div>
        <div className="flex gap-4">
          <label htmlFor="grading">Baholash mezoni</label>
          <input type="text" id="grading" name="grading" className="" />
        </div>
        <div className="flex gap-4">
          <label htmlFor="weight">Solishtirma og'irlik</label>
          <input type="number" id="weight" name="weight" className="" />
        </div>
        <div className="flex gap-4">
          <label htmlFor="full-description">Batafsil ma'lumot</label>
          <textarea
            id="full-description"
            name="full-description"
            rows="5"
            className="w-full"
          />
        </div>
        <div>
          <button className="w-[150px] p-2 bg-green-400 rounded-lg text-white hover:bg-green-500 active:ring">
            Taklif yuborish
          </button>
        </div>
      </form>
    </div>
  );
};
