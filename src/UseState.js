import React from "react";

const SECURITY_CODE = 'paradigma'

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  })

  console.log(state.value)

  React.useEffect(() => {
    console.log("Empezando el efecto")
    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la velidación")

        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
          })
        } else {
          setState({
            ...state,
            error: true,
            loading: false,
          })
        }
        console.log("Terminando la validación")
      }, 3000)
    }

    console.log("Terminando el efecto")
  }, [state.loading])

  if (!state.deleted && !state.confirmed) {
    return (
      <div >
        <h2>Eliminar {name}</h2>
        <p>Por favor, escribe el código de seguridad.</p>
        {(state.error && !state.loading) && (
          <p>Error: el código es incorrecto</p>
        )}
        {state.loading && (
          <p>Cargando...</p>
        )}
        <input
          placeholder="Código de seguridad"
          value={state.value}
          onChange={(event) => {
            setState({
              ...state,
              value: event.target.value,
            })
          }} />
        <button
          onClick={() => {
            setState({
              ...state,
              loading: true,
            })
          }}>
          Comprobar
        </button>
      </div>
    )
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>¿Seguro que quieres eliminar UseState?</p>
        <button
          onClick={() => {
            setState({
              ...state,
              deleted: true,
            })
          }}>
          Sí, Eliminar
        </button>
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              value:'',
            })
          }}>
          No, Volver
        </button>
      </>
    )
  } else {
    return (
      <>
        <p>Eliminando con éxito</p>
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              deleted: false,
              value:'',
            })
          }}
        >
          Resetear, volver atrás
        </button>
      </>
    )
  }
}

export { UseState }