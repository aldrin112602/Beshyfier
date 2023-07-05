const Form = () => {

    const handleSubmit = e => e.preventDefault();


    const handleChangeEvent = e => {
        const output = e.target.value.trim().replace(/\s+/g, " 🤸 ") + " 😚❤️";
        document.querySelector('#output').value = output;
    }

    const copyTextBeshy = () => {
        const text = document.querySelector("#output");
        text.value.length > 0 && (() => {
            text.select();
            document.execCommand("copy");

            Swal.fire(
              "Congratulations!",
              "Coppied 🤸 successfully 🤸 beshy 🤸 ko.",
              "success"
            );
        })();
        
    }



    return (
      <form class="text-start" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="">Type na beshy</label>
          <input
            type="text"
            class="form-control form-control-md form-control-lg"
            required={true}
            onInput={handleChangeEvent}
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
            id="output"
          ></textarea>
          <button
            onClick={copyTextBeshy}
            type="button"
            class="mt-3 btn btn-primary"
          >Copy mona beshy ko</button>
        </div>
      </form>
    );
}
