import React from 'react'

function PrivateAddCollectPoint() {
  return (
    <>
    <section className='heading'>
        <h4>Ajouter un point de collect</h4>
        <p>Ajouter un nouveau point de collecte en base de données</p>
    </section>
    <form>
        <div className="form-group">
            <select name="" id="">
                <option value="">selectioner un client</option>
                <option value="client1"> client 1</option>
                <option value="client2"> client 2</option>
                <option value="client3"> client 3</option>
                <option value="client4"> client 4</option>
            </select>
        </div>
      
        <div className="form-group">
            <select name="" id="">
                <option value="">selectioner un type de déchets</option>
                <option value="client1"> Plastique</option>
                <option value="client2"> Papier</option>
                <option value="client3"> Papier confidentiels</option>
                <option value="client4">capsule à café</option>
            </select>
        </div>
        <div className="form-group">
           <label htmlFor="address">Adresse du point de collecte</label>
           <input type="text" />
        </div>
        <div className="form-group">
           <label htmlFor="description">Description du point de collecte</label>
           <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button className='btn btn-block' type='submit'>Enregistrer le point de collecte</button>
    </form>
    </>
  )
}

export default PrivateAddCollectPoint