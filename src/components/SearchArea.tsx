import React from 'react'

interface Props {
    handleSubmit: (e: any) => void
    handleChange: (e: any) => void
}

const SearchArea = (props: Props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <i className="material-icons prefix">search</i>
                            <input placeholder="Search movie..." type="text" onChange={props.handleChange}/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchArea