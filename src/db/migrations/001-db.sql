-- Up
CREATE TABLE rivenditori (
    id_rivenditore integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome TEXT
    );

   
CREATE TABLE contatti_rivenditore (
    id_contatto integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    id_rivenditore double  REFERENCES rivenditori(id_rivenditore),
    numero_tel_fisso TEXT,
    numero_tel_mobile TEXT,
    email TEXT
    );

 
   
 CREATE TABLE punti_vendita_categorie (
    id_cat_punto_vendita integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    categoria TEXT
    );   

   
   
CREATE TABLE punti_vendita (
    id_punto_vendita integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    id_rivenditore double REFERENCES rivenditori(id_rivenditore),
    id_cat_punto_vendita double REFERENCES punti_vendita_categorie(id_cat_punto_vendita),
     coordx double,
     coordy double,
     indirizzo TEXT
    );
 

    
   
   
 CREATE TABLE prodotti_categorie (
    id_categoria integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    prod_categoria TEXT
    );
   
   
   
CREATE TABLE prodotti_punti_vendita (
    id_prodotto integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    id_punto_vendita double REFERENCES punti_vendita(id_punto_vendita),
    id_categoria double REFERENCES prodotti_categorie(id_categoria),
    descrizione TEXT,
    prezzo double,
    quantita double
    );
   
    


INSERT INTO prodotti_categorie( id_categoria, prod_categoria )
	values (1,"Verdure");
INSERT INTO prodotti_categorie( id_categoria, prod_categoria )
	values (2,"Carne");
INSERT INTO prodotti_categorie( id_categoria, prod_categoria )
	values (3,"Funghi");
INSERT INTO prodotti_categorie( id_categoria, prod_categoria )
	values (4,"Pronti");


INSERT INTO punti_vendita_categorie(id_cat_punto_vendita , categoria )
	values (1,"Contadino");
INSERT INTO punti_vendita_categorie( id_cat_punto_vendita ,  categoria )
	values (2,"Rivenditore");
INSERT INTO punti_vendita_categorie( id_cat_punto_vendita ,   categoria )
	values (3,"Distributore");
INSERT INTO punti_vendita_categorie(  id_cat_punto_vendita , categoria )
	values (4,"Ristorante");



INSERT INTO rivenditori(id_rivenditore, nome)
	values (1, "Frutta Banfi SA");
INSERT INTO rivenditori(id_rivenditore, nome)
	values (2, "Roberto Callo");
INSERT INTO rivenditori(id_rivenditore, nome)
	values (3, "Vasco Salumi SA");



	


INSERT INTO contatti_rivenditore( id_rivenditore, numero_tel_fisso, numero_tel_mobile, email)
	values (1, "091banfi", "07banfi", "fruttaBanfi@email.com");
INSERT INTO contatti_rivenditore( id_rivenditore, numero_tel_fisso, numero_tel_mobile, email)
	values (2, "091robe", "079robe", "roberto@email.com");
INSERT INTO contatti_rivenditore( id_rivenditore, numero_tel_fisso, numero_tel_mobile, email)
	values (3, "091vasco", "079vasco", "vasco@email.com");
	







INSERT INTO punti_vendita(id_punto_vendita, id_rivenditore,id_cat_punto_vendita ,coordx , coordy , indirizzo)
	values (1, 1, 1, 46.17902546993743, 8.848550303838042, "via punto 1 rivenditore 1");

INSERT INTO punti_vendita( id_punto_vendita, id_rivenditore, id_cat_punto_vendita ,coordx , coordy , indirizzo)
	values (2, 1, 2, 46.17265453191975, 8.850534748850794, "via punto 2 rivenditore 1");

INSERT INTO punti_vendita( id_punto_vendita, id_rivenditore, id_cat_punto_vendita ,coordx , coordy , indirizzo)
	values (3, 2, 3, 46.17955984180839, 8.866986269285132, "via punto 3 rivenditore 2");

INSERT INTO punti_vendita( id_punto_vendita, id_rivenditore, id_cat_punto_vendita ,coordx , coordy , indirizzo)
	values (4, 3, 4, 46.17971309534643, 8.85933775972107, "via punto 4 rivenditore 3");
	






INSERT INTO prodotti_punti_vendita ( id_prodotto , id_punto_vendita , id_categoria ,descrizione , prezzo , quantita)
	values (1,1, 1, "Carote", 10.0, 1.0);

INSERT INTO prodotti_punti_vendita (id_prodotto , id_punto_vendita , id_categoria ,descrizione , prezzo , quantita)
	values (2,2, 2, "Bistecche", 100.0, 1.0);


INSERT INTO prodotti_punti_vendita (id_prodotto , id_punto_vendita , id_categoria ,descrizione , prezzo , quantita)
	values (3,3, 3, "Porcini", 100.0, 1.0);


INSERT INTO prodotti_punti_vendita ( id_prodotto ,id_punto_vendita , id_categoria ,descrizione , prezzo , quantita)
	values (4,4, 4, "Pizza", 100.0, 1.0);

	



 

-- Down


DROP table if exists  prodotti_punti_vendita ;
DROP table if exists  punti_vendita ;
DROP table if exists  contatti_rivenditore ;
DROP table if exists  rivenditori ;
DROP table if exists  prodotti_categorie ; 
DROP table if exists  punti_vendita_categorie ;