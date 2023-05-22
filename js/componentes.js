const componente0 = {
    // footer
    template: `
    <footer class="content-footer">
        <section class="footer1">
            <section class="nave">
                <section class="titulo">
                    <h4 class="t4">NAVEGACIÓN</h4>
                </section>
                <section class="items1">
                    <a href="#">🏠 INICIO</a>
                    <a href="#">📆 CALENDARIO</a>
                    <a href="#">☎️ CONSULTAS</a>
                    <a href="#">📸 GALERÍA</a>
                    <a href="#">💲 MEDIOS DE PAGO</a>
                    <a href="#">🎀 NOVEDADES</a>
                    <a href="#">❓ PREGUNTAS FRECUENTES</a>
                    <a href="#">📢 PROMOCIONES</a>
                    <a href="#">✅ RESERVAS</a>
                    <a href="#">💱 POLÍTICAS DE DEVOLUCIÓN</a>
                </section>
            </section>

            <section class="cont">
                <section class="contactanos">
                    <section class="titulo">
                        <h4 class="t4">CONTÁCTANOS</h4>
                    </section>
                    <section class="items2">
                        <a href="#">📞: +54 2291 57-0540</a>
                        <a href="#">📧: @carolinahotelyspa</a>
                        <a href="#">📧: carolinahotelyspa@gmail.com</a>
                        <a href="#">🔍: Calle 11 N° 1144 entre 22 y 24 (a 5 cuadras de la playa) (B7607) - Miramar - Buenos Aires - República Argentina 🇦🇷</a>
                    </section>
                </section>
                <section class="redes">
                    <section class="titulo">
                        <h4 class="t4">NUESTRAS REDES SOCIALES</h4>
                    </section>
                    <nav class="items3">
                        <a href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook fa-4x" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram fa-4x" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com" target="_blank"><i class="fa fa-linkedin fa-4x" aria-hidden="true"></i></a>
                        <a href="https://www.pinterest.com" target="_blank"><i class="fa fa-pinterest fa-4x" aria-hidden="true"></i></a>
                        <a href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter fa-4x" aria-hidden="true"></i></a>
                        <a href="https://www.whatsapp.com" target="_blank"><i class="fa fa-whatsapp fa-4x" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com" target="_blank"><i class="fa fa-youtube fa-4x" aria-hidden="true"></i></a>
                    </nav>
                </section>
            </section>

            <section class="mdp">
                <section class="titulo">
                    <h4 class="t4">MEDIOS DE PAGO</h4>
                </section>

                <section class="content-tarjetas">

                    <section class="col-h5">
                        <h5>Tarjetas de Débito:</h5>
                        <h5>Tarjetas de Crédito:</h5>
                        <h5>Transferencia Bancaria:</h5>
                        <h5>Efectivo:</h5>
                    </section>

                    <section class="col-items">
                        <section class="item-deb">
                            <img src="./img/tarjetas/banelco100x70.jpg" alt="Logo Banelco">
                            <img src="./img/tarjetas/link70x70.jpg" alt="Logo Link">
                        </section>
                        <section class="item-cre">
                            <img src="./img/tarjetas/visa100x70.jpg" alt="Logo Visa">
                            <img src="./img/tarjetas/master100x70.jpg" alt="Logo Mastercard">
                        </section>
                        <section class="item-tra">
                            <img src="./img/tarjetas/transf70x70.jpg" alt="Logo Transfer">
                            <img src="./img/tarjetas/ppal70x70.jpg" alt="Logo PayPal">
                        </section>
                        <section class="item-efe">
                            <img src="./img/tarjetas/mp70x70.jpg" alt="Logo MercadoPago">
                            <img src="./img/tarjetas/pesosar50x70.jpg" alt="Logo Pesos AR">
                            <img src="./img/tarjetas/dolusa100x70.jpg" alt="Logo Dolar">
                            <img src="./img/tarjetas/euro100x70.jpg" alt="Logo Euro">
                        </section>
                    </section>
                </section>
            </section>
        </section>

        <section class="footer2">
            <p>Copyright &copy - 2023 Todos los Derechos Reservados</p>
            <section class="fechayhora">
                <p id="date"></p><p id="time"></p>
            </section>
            <p>Desarrollado por "T-7 Team Seven&#xae" (una Startup de Codo a Codo)</p>
        </section>
        <script src="js/clock.js"></script>
    </footer>
    `
}


const componente1 = {
    // faq
    template: `
    <section class="content-faq">
        <nav class="nav-faq">
            <img src="./img/faq/faqs-022c-h150.png" alt="Logo FAQ">
            <h1>PREGUNTAS FRECUENTES</h1>
        </nav>

        <details>
            <summary class="rubro">
                <h2>Básicas p/cualquier Hotel:</h2>
            </summary>
            <section class="answer">
                <details>
                    <summary>
                        ¿Cuáles son los Medios de Pago disponibles?
                    </summary>
                    <section class="answer">
                        <section class="mdp">
                            <section class="titulo">
                                <h4 class="t4">MEDIOS DE PAGO</h4>
                            </section>

                            <section class="content-tarjetas">

                                <section class="col-h5">
                                    <h5>Tarjetas de Débito:</h5>
                                    <h5>Tarjetas de Crédito:</h5>
                                    <h5>Transferencia Bancaria:</h5>
                                    <h5>Efectivo:</h5>
                                </section>

                                <section class="col-items">
                                    <section class="item-deb">
                                        <img src="./img/tarjetas/banelco100x70.jpg" alt="Logo Banelco">
                                        <img src="./img/tarjetas/link70x70.jpg" alt="Logo Link">
                                    </section>
                                    <section class="item-cre">
                                        <img src="./img/tarjetas/visa100x70.jpg" alt="Logo Visa">
                                        <img src="./img/tarjetas/master100x70.jpg" alt="Logo Mastercard">
                                    </section>
                                    <section class="item-tra">
                                        <img src="./img/tarjetas/transf70x70.jpg" alt="Logo Transfer">
                                        <img src="./img/tarjetas/ppal70x70.jpg" alt="Logo PayPal">
                                    </section>
                                    <section class="item-efe">
                                        <img src="./img/tarjetas/mp70x70.jpg" alt="Logo MercadoPago">
                                        <img src="./img/tarjetas/pesosar50x70.jpg" alt="Logo Pesos AR">
                                        <img src="./img/tarjetas/dolusa100x70.jpg" alt="Logo Dolar">
                                        <img src="./img/tarjetas/euro100x70.jpg" alt="Logo Euro">
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Cuáles son los horarios del check-in y check-out?
                    </summary>
                    <section class="answer">
                        <p>Check-in: a partir de las 14:00 hs. Check-out: a partir de las 10:00 hs. de la mañana.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿En caso de llegar antes del check-in, dónde puedo dejar los bolsos/equipaje?
                    </summary>
                    <section class="answer">
                        <p>Puede dejar los bolsos en el hall hasta que la habitación esté disponible.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Si quiero quedarme más tiempo después del check-out, puedo?
                    </summary>
                    <section class="answer">
                        <p>Sí, si necesita quedarse se cobra un adicional:</p>
                        <p>hasta antes. . . de las 12:00 hs. 25% del valor equivalente a una noche,</p>
                        <p>hasta. . . . . . . . . . las 18:00 hs. 50% del valor equivalente a una noche, y</p>
                        <p>hasta después de las 18:00 hs. 100%.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿A cuántas cuadras está el hotel del centro y la playa?
                    </summary>
                    <section class="answer">
                        <p>Estamos ubicados a 5 cuadras del mar y a 5 del centro de la ciudad.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Cómo son las habitaciones del hotel?
                    </summary>
                    <section class="answer">
                        <p>No hay distinción entre estándar o premium, son todas iguales y tienen el mismo costo.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Si tengo que cancelar una reserva, me reembolsan el dinero?
                    </summary>
                    <section class="answer">
                        <p>Existe una <span><a href="./html/politica.html">Política por Cancelación de Reservas</a></span> (click en el enlace para saber más).</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿A qué hora es el desayuno?
                    </summary>
                    <section class="answer">
                        <p>De 8:00 hs. a 10:30 hs.</p>
                    </section>
                </details>
            </section>
        </details>

        <details>
            <summary class="rubro">
                <h2>Lo que se puede hacer y no se puede hacer en el hotel...</h2>
            </summary>
            <section class="answer">

                <details>
                    <summary>
                        ¿Se puede llevar mascotas?
                    </summary>
                    <section class="answer">
                        <p>No, de ninguna especie ni tamaño.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Se puede fumar en la habitación?
                    </summary>
                    <section class="answer">
                        <p>No, está prohibido fumar en cualquier lugar dentro del hotel.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Se puede comer en la habitación?
                    </summary>
                    <section class="answer">
                        <p>No, no vendemos comida, pero ofrecemos el comedor y cubiertos si lo necesitan. Contamos también con horno microondas y heladera para almacenar bebidas frescas.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿En caso de llegar antes del check-in, se puede dejar los bolsos/equipaje en algún lugar seguro dentro del hotel?
                    </summary>
                    <section class="answer">
                        <p>Puede dejar los bolsos en el hall hasta que la habitación esté disponible.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Puedo quedarme más tiempo después del check-out?
                    </summary>
                    <section class="answer">
                        <p>Sí, si necesita quedarse se cobra un adicional:</p>
                        <p>hasta antes. .de las 12:00 hs. 25% del valor equivalente a una noche,</p>
                        <p>hasta. . . . . . las 18:00 hs. 50% del valor equivalente a una noche, y</p>
                        <p>hasta después de las 18:00 hs. 100%.</p>
                    </section>
                </details>
            </section>
        </details>

        <details>
            <summary class="rubro">
                <h2>Lo que tiene y no tiene el hotel...</h2>
            </summary>
            <section class="answer">

                 <details>
                    <summary>
                        ¿Hay alguien para abrir la puerta después de las 22:00 hs.?
                    </summary>
                    <section class="answer">
                        <p>Sí, siempre hay personal del hotel en la recepción las 24 hs.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Hay para almorzar o cenar en el hotel?
                    </summary>
                    <section class="answer">
                        <p>No, no vendemos comida, pero ofrecemos el comedor y cubiertos si lo necesitan. Contamos también con horno microondas y heladera para almacenar bebidas frescas.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Brindan agua caliente?
                    </summary>
                    <section class="answer">
                        <p>Sí, brindamos servicio de agua caliente.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Tienen Aire Acondicionado en las habitaciones?
                    </summary>
                    <section class="answer">
                        <p>Sí, contamos con habitaciones equipadas con aire acondicionado tipo split (frío/calor).</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Tienen habitaciones preparadas con cuna para bebés?
                    </summary>
                    <section class="answer">
                        <p>Sí, pero tienen que avisar con anticipación y también con cuántos bebés van arribar al hotel.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Tienen habitaciones preparadas para recién casados?
                    </summary>
                    <section class="answer">
                        <p>Sí, pero tienen que avisar con anticipación para ambientar la habitación y decirnos para cuál ocasión (Recién Casados, Separados, Divorciados, Cumpleaños, Aniversario, Despedida de Soltero, Halloween, etc.).</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Tienen SPA en el hotel?
                    </summary>
                    <section class="answer">
                        <p>Sí, el spa cuenta con sauna seco, servicio de masajes y gym(*). El spa está abierto a partir de las 9:00 hs. hasta las 22:00 hs. (*)Disponible sólo para huéspedes del hotel.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿El servicio de SPA está incluido en la tarifa por noche?
                    </summary>
                    <section class="answer">
                        <p>No, sólo el gym está incluido en el precio.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Tienen Teléfono en las habitaciones (o dentro del hotel) para hacer llamadas tanto locales como larga distancia e internacionales?
                    </summary>
                    <section class="answer">
                        <p>Sí, tenemos y también tenemos en la recepción del hotel.</p>
                    </section>
                </details>

                <details>
                    <summary>
                        ¿Tienen Wifi?
                    </summary>
                    <section class="answer">
                        <p>Sí, tenemos y es gratis sólo para huéspedes del hotel.</p>
                    </section>
                </details>
            </section>
        </details>
    </section>
    `
}


