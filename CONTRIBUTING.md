<h1>Como contribuir al Proyecto</h1>

<p>
  ¡Gracias por tu interés en colaborar!
  Este proyecto se creó en el marco de Nerdearla 2025, y cualquier aporte de la comunidad es más que bienvenido.
</p>

<h3>
  Instalación rápida
</h3>

<p>
  Antes de contribuir, asegurate de poder levantar el proyecto en tu máquina:
</p>

 <ol>
  <li>
    <p>
      Hacer una bifurcación del repo. En GitHub, presioná el botón Fork (arriba a la derecha).
    </p>
  </li>
  <li>
    <p>
      Clonar tu fork.
    </p>

  ```

    git clone https://github.com/TU-NOMBRE-DE-USUARIO/nerdearla2025-Astro.git 

  ```
    
  </li>
  <li>
    <p>
      Ubicate en la carpeta raiz del proyecto  con el siguiente comando.
    </p>

  ```

    cd astro-project

  ```
    
  </li>
  <li>
    <p>
      Instalar las dependencias.
    </p>

  ```

    npm install

  ```
    
  </li>
  <li>
    <p>
      Levantar el servidor en local.
    </p>

  ```

    npm run dev

  ```
    
  </li>
  <li>
    <p>
      Abrí http://localhost:4321 en tu navegador.
    </p>
  </li>
</ol>

<h3>Flujo de contribución</h3>

<ol>
  <li>
    <p>
      Hacé Fork del repositorio.
    </p>
  </li>
  <li>
    <p>
      Cloná tu fork en local.
    </p>
  </li>
  <li>
    <p>
      Agregá el remoto original:
    </p>

  ```

  git remote add upstream https://github.com/jonadev-ok/nerdearla2025-Astro.git

  ```
  </li>
  <li>
    <p>
      Agregá una rama descriptiva:
    </p>

  ```

  git checkout -b feature/mi-cambio

  ```
  </li>
  <li>
    <p>
      Hacé tus cambios y commiteá:
    </p>

  ```

  git add .
  git commit -m "fix: corrige bug en navbar"

  ```
  </li>
  <li>
    <p>
      Sincronizá con el repo original antes de subir:
    </p>

  ```

  git fetch upstream
  git checkout main
  git merge upstream/main   # o git rebase upstream/main


  ```
  </li>
  <li>
    <p>
      Subí tu rama a tu fork:
    </p>

  ```

  git push -u origin feature/mi-cambio

  ```
  </li>
  <li>
    <p>
      Abrí un Pull Request desde tu fork hacia este repo.
    </p>
  </li>
</ol>

<h3>
  Reportar bugs
</h3>

<p>
  Si encontrás un error, creá un issue con:
</p>
<ul>
  <li>
    <p>
      Descripción clara del problema.
    </p>
  </li>
  <li>
    <p>
      Pasos para reproducirlo.
    </p>
  </li>
</ul>







