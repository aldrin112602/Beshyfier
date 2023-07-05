const Form = () => {
    const handleSubmit = e => e.preventDefault(); 
    return (
      <form class="text-start" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="">Type na beshy</label>
          <input
            type="text"
            class="form-control form-control-md form-control-lg"
            placeholder="Bored lang ang beshy ko?"
            required={true}
          ></input>
        </div>

        <div class="form-group mt-4">
          <label for="">Output dito beshy</label>
          <textarea
            type="text"
            class="form-control form-control-md form-control-lg"
            placeholder=""
            required={true}
            readonly={true}
          ></textarea>
          
        </div>
      </form>
    );
}