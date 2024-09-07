import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "emailVerified") VALUES ('4f93dc86-3b49-4153-b296-f2112c2ed0cc', '1Deshaun.Legros@gmail.com', 'Eve Davis', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv44556', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', true);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "emailVerified") VALUES ('4b815211-3eac-4c10-8987-280700915dbf', '9Winifred.Kihn@yahoo.com', 'Eve Davis', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv78901', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', false);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "emailVerified") VALUES ('11a28d60-d86f-427b-addb-04c3d7044142', '17Jaida26@gmail.com', 'Eve Davis', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv78901', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', false);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "emailVerified") VALUES ('ab9a2ff0-64a8-441c-9375-f0e13a96c7e8', '25Derrick.Hackett@hotmail.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv44556', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', false);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "emailVerified") VALUES ('7b3d4401-274a-4ee4-974c-7912d8e6bc63', '33Giovanni.Mohr@yahoo.com', 'Eve Davis', 'https://i.imgur.com/YfJQV5z.png?id=35', 'inv11223', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', true);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "emailVerified") VALUES ('7d52aa82-ced7-43ac-8620-e89853a4403c', '41Schuyler.Sipes6@hotmail.com', 'Dave Brown', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv11223', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', false);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "emailVerified") VALUES ('ce6e38f6-2a03-4e82-a1de-141a2a614635', '49Idella_Nicolas@hotmail.com', 'Dave Brown', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv44556', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', false);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "emailVerified") VALUES ('e41cc421-d9cf-400d-b88c-570a29750be7', '57Augustine_Nader@hotmail.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv67890', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', false);
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password", "emailVerified") VALUES ('41864ced-fce1-4c2f-a82d-099c2db9236a', '73Dwight90@yahoo.com', 'Carol White', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv12345', 'VERIFIED', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', true);

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('bab1bf9d-82b4-4ff0-8a2b-9d6f6f3bb7d7', 'z9y8x7w6v5u4t3s2r1q0', '{"vos":"conitor","admoneo":"comptus","brevis":"comitatus","sordeo":"canis","antiquus":"inventore"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('0d6be853-e330-4c68-96a2-1a14e3522439', 'q1w2e3r4t5y6u7i8o9p0', '{"surculus":"demens","culpo":"antepono","tres":"angustus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('2e4dbdea-07f8-4a8c-99d2-9c4804c79f81', 'z9y8x7w6v5u4t3s2r1q0', '{"ipsa":"coerceo","curvo":"admitto","caveo":"velum","toties":"cogito"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('cd229a56-6f61-47ce-83a7-520f677139df', 'q1w2e3r4t5y6u7i8o9p0', '{"conforto":"tristis","caveo":"cornu","aufero":"accusantium","odit":"tam"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('4398814a-195d-4583-a60e-45a69c5e179d', 'a1b2c3d4e5f6g7h8i9j0', '{"patruus":"statua","crebro":"demergo","calcar":"cetera","bestia":"viriliter"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('2d17d580-ecd3-4934-8256-d64e20c85309', 'q1w2e3r4t5y6u7i8o9p0', '{"dolorum":"taedium","alioqui":"commodi","convoco":"studio"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('3efe9066-6667-4844-86a8-c8eec798547e', 'q1w2e3r4t5y6u7i8o9p0', '{"conspergo":"dolorum","stultus":"celo","tracto":"debilito"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('1fe3a75b-1086-4f51-9722-a3b8ad3313f9', 'l1k2j3h4g5f6d7s8a9p0', '{"contabesco":"tyrannus","provident":"vigor","alias":"arma","amissio":"tutamen"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('ea46425c-1906-48d8-994d-22769c5ff594', 'a1b2c3d4e5f6g7h8i9j0', '{"usitas":"communis","sumo":"patruus","via":"caelestis","temperantia":"altus","repudiandae":"spargo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('da18011d-e7b0-4df5-b091-67926bcbfcf1', 'l1k2j3h4g5f6d7s8a9p0', '{"curto":"corrumpo","magnam":"coma","summisse":"delectatio"}'::jsonb);

INSERT INTO "SessionData" ("id", "sessionToken", "expiryDate", "userId") VALUES ('3e48064f-a436-4413-a43f-d71ea8913a50', 'm6n5b4v3c2x1z0a9s8d7f6g5h4j3k2l1', '2025-04-03T04:44:39.075Z', 'ce6e38f6-2a03-4e82-a1de-141a2a614635');
INSERT INTO "SessionData" ("id", "sessionToken", "expiryDate", "userId") VALUES ('55026ede-4521-4228-b8c7-2c67b7f6b954', 'm6n5b4v3c2x1z0a9s8d7f6g5h4j3k2l1', '2024-12-15T02:50:52.576Z', '41864ced-fce1-4c2f-a82d-099c2db9236a');
INSERT INTO "SessionData" ("id", "sessionToken", "expiryDate", "userId") VALUES ('cd427022-9872-482b-a561-9a9142da18c8', 'q1w2e3r4t5y6u7i8o9p0a1s2d3f4g5h6', '2025-07-26T11:46:02.121Z', '4b815211-3eac-4c10-8987-280700915dbf');
INSERT INTO "SessionData" ("id", "sessionToken", "expiryDate", "userId") VALUES ('765abadc-f869-4c98-8da0-9fed2210ddc0', 'p0o9i8u7y6t5r4e3w2q1a2s3d4f5g6h7', '2023-10-22T00:31:28.555Z', 'e41cc421-d9cf-400d-b88c-570a29750be7');
INSERT INTO "SessionData" ("id", "sessionToken", "expiryDate", "userId") VALUES ('cc227363-379d-4aa9-9aed-25ef85cf155d', 'm6n5b4v3c2x1z0a9s8d7f6g5h4j3k2l1', '2024-05-02T00:16:20.299Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "SessionData" ("id", "sessionToken", "expiryDate", "userId") VALUES ('29640c4a-d7d5-452d-b27e-e4951bbc752b', 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6', '2023-12-18T12:56:05.075Z', 'ce6e38f6-2a03-4e82-a1de-141a2a614635');
INSERT INTO "SessionData" ("id", "sessionToken", "expiryDate", "userId") VALUES ('e154bd42-b005-4c9a-89c8-f2516dc4fd41', 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6', '2025-02-13T17:41:05.458Z', 'ce6e38f6-2a03-4e82-a1de-141a2a614635');
INSERT INTO "SessionData" ("id", "sessionToken", "expiryDate", "userId") VALUES ('c622a7db-b45d-48a1-93e5-9ebc0ffe57fd', 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6', '2023-09-25T03:12:48.026Z', '41864ced-fce1-4c2f-a82d-099c2db9236a');
INSERT INTO "SessionData" ("id", "sessionToken", "expiryDate", "userId") VALUES ('2ed1790f-cb50-4ec6-af49-55855e60c12b', 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6', '2024-11-10T17:25:13.206Z', 'ab9a2ff0-64a8-441c-9375-f0e13a96c7e8');
INSERT INTO "SessionData" ("id", "sessionToken", "expiryDate", "userId") VALUES ('0cd56540-1bc3-4fe0-993d-bbb3be24bfac', 'm6n5b4v3c2x1z0a9s8d7f6g5h4j3k2l1', '2025-05-11T07:34:08.798Z', '7d52aa82-ced7-43ac-8620-e89853a4403c');

INSERT INTO "Location" ("id", "latitude", "longitude", "timestamp", "userId") VALUES ('5df45521-e12e-4c28-9d0e-c6fb1d9e2463', 642, 123, '2024-12-02T02:30:02.744Z', '7b3d4401-274a-4ee4-974c-7912d8e6bc63');
INSERT INTO "Location" ("id", "latitude", "longitude", "timestamp", "userId") VALUES ('36898fe9-a5fe-45c6-b884-836cb3fb0e19', 128, 327, '2024-05-05T17:19:25.191Z', 'ab9a2ff0-64a8-441c-9375-f0e13a96c7e8');
INSERT INTO "Location" ("id", "latitude", "longitude", "timestamp", "userId") VALUES ('6242aa66-b0f0-428c-a24f-a0c62e30d842', 790, 666, '2024-02-16T21:15:07.431Z', '7b3d4401-274a-4ee4-974c-7912d8e6bc63');
INSERT INTO "Location" ("id", "latitude", "longitude", "timestamp", "userId") VALUES ('55982f90-1d75-4b5f-a6b3-355acf57096a', 952, 58, '2025-07-17T17:24:32.851Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Location" ("id", "latitude", "longitude", "timestamp", "userId") VALUES ('8a282870-4863-4b13-98aa-a9c49e4c1b97', 973, 334, '2024-04-17T20:02:57.701Z', '4b815211-3eac-4c10-8987-280700915dbf');
INSERT INTO "Location" ("id", "latitude", "longitude", "timestamp", "userId") VALUES ('fe4997c5-5747-420d-92f4-b1a5f8ca5a68', 203, 943, '2024-08-19T19:34:50.521Z', '41864ced-fce1-4c2f-a82d-099c2db9236a');
INSERT INTO "Location" ("id", "latitude", "longitude", "timestamp", "userId") VALUES ('dd5a2264-e661-4766-aa37-f52da2dc3119', 225, 368, '2024-10-27T18:41:09.225Z', '41864ced-fce1-4c2f-a82d-099c2db9236a');
INSERT INTO "Location" ("id", "latitude", "longitude", "timestamp", "userId") VALUES ('0dd3d76a-d5ad-4e95-86d3-f834589e01b8', 367, 259, '2025-05-24T09:02:54.862Z', '4b815211-3eac-4c10-8987-280700915dbf');
INSERT INTO "Location" ("id", "latitude", "longitude", "timestamp", "userId") VALUES ('ccd3880f-c42c-4ef6-972e-73a88941f835', 683, 829, '2024-10-07T01:47:36.441Z', '4f93dc86-3b49-4153-b296-f2112c2ed0cc');
INSERT INTO "Location" ("id", "latitude", "longitude", "timestamp", "userId") VALUES ('fc0abaab-f5f4-4e9d-9bb8-b3a5b1804c03', 998, 187, '2023-09-29T09:17:27.624Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "EmergencyContact" ("id", "name", "relation", "contactNo", "email", "userId") VALUES ('2f954a3e-311e-459a-8f22-19b06a9ec440', 'Eva Green', 'Sister', '1234567890', '184Hortense65@gmail.com', '4f93dc86-3b49-4153-b296-f2112c2ed0cc');
INSERT INTO "EmergencyContact" ("id", "name", "relation", "contactNo", "email", "userId") VALUES ('5cbb8220-f42f-47a4-b48b-c93e2645b8a1', 'Eva Green', 'Sister', '6677889900', '189Zachariah37@gmail.com', '4f93dc86-3b49-4153-b296-f2112c2ed0cc');
INSERT INTO "EmergencyContact" ("id", "name", "relation", "contactNo", "email", "userId") VALUES ('a31595ab-dd52-475b-b480-167fb2ed1ac2', 'Bob Smith', 'Brother', '0987654321', '194Gerhard.Armstrong73@yahoo.com', '7b3d4401-274a-4ee4-974c-7912d8e6bc63');
INSERT INTO "EmergencyContact" ("id", "name", "relation", "contactNo", "email", "userId") VALUES ('ab329601-91ad-4720-9454-1b8ed0faac80', 'Bob Smith', 'Father', '6677889900', '199Jerad_Rath0@yahoo.com', 'ce6e38f6-2a03-4e82-a1de-141a2a614635');
INSERT INTO "EmergencyContact" ("id", "name", "relation", "contactNo", "email", "userId") VALUES ('8f3d052a-b8c1-4946-b91a-f01f7a04c783', 'Alice Johnson', 'Brother', '6677889900', '204Astrid.Fahey@yahoo.com', 'ab9a2ff0-64a8-441c-9375-f0e13a96c7e8');
INSERT INTO "EmergencyContact" ("id", "name", "relation", "contactNo", "email", "userId") VALUES ('4cf20eb4-21c1-47aa-a7a8-757c82628306', 'Catherine Lee', 'Father', '1234567890', '209Eulalia_Dare@yahoo.com', 'e41cc421-d9cf-400d-b88c-570a29750be7');
INSERT INTO "EmergencyContact" ("id", "name", "relation", "contactNo", "email", "userId") VALUES ('1e720fee-ec19-4609-830a-e4a34ef5457d', 'Eva Green', 'Mother', '6677889900', '214Hazle9@gmail.com', 'ce6e38f6-2a03-4e82-a1de-141a2a614635');
INSERT INTO "EmergencyContact" ("id", "name", "relation", "contactNo", "email", "userId") VALUES ('0e8c2a2e-88d7-48c2-a221-6ac60529ea14', 'Alice Johnson', 'Friend', '5566778899', '219Edwardo_Ward@yahoo.com', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "EmergencyContact" ("id", "name", "relation", "contactNo", "email", "userId") VALUES ('c6481cd9-d530-4f72-93a1-c44aa984ae99', 'Catherine Lee', 'Mother', '1122334455', '224Ebba.Marks62@yahoo.com', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "EmergencyContact" ("id", "name", "relation", "contactNo", "email", "userId") VALUES ('5f02d9d7-b481-4fb5-bf45-f38c5b50b83e', 'Bob Smith', 'Father', '5566778899', '229Maritza.Schmitt@yahoo.com', '11a28d60-d86f-427b-addb-04c3d7044142');

INSERT INTO "PoliceStation" ("id", "name", "latitude", "longitude") VALUES ('75d94c04-1915-4baf-8db7-a31a1e8a3ee6', 'Southtown Police Station', 781, 741);
INSERT INTO "PoliceStation" ("id", "name", "latitude", "longitude") VALUES ('8a7d5632-523c-4b43-b17e-17ab68c4d9a6', 'Southtown Police Station', 20, 477);
INSERT INTO "PoliceStation" ("id", "name", "latitude", "longitude") VALUES ('d40c45d8-5617-4ddc-9010-8917e0d2efeb', 'East End Police Station', 888, 47);
INSERT INTO "PoliceStation" ("id", "name", "latitude", "longitude") VALUES ('841bec77-fb62-4655-8d92-202de401ae19', 'Northside Police Station', 33, 491);
INSERT INTO "PoliceStation" ("id", "name", "latitude", "longitude") VALUES ('762ecacb-35ca-482b-8e0f-184d5ecef8a0', 'East End Police Station', 120, 28);
INSERT INTO "PoliceStation" ("id", "name", "latitude", "longitude") VALUES ('c8207206-c5b2-43d4-aa27-18c99828a031', 'Central Police Station', 39, 749);
INSERT INTO "PoliceStation" ("id", "name", "latitude", "longitude") VALUES ('1234f043-6ff6-4a91-9cce-c530d8e2f48c', 'Southtown Police Station', 606, 913);
INSERT INTO "PoliceStation" ("id", "name", "latitude", "longitude") VALUES ('e8ed401b-9f05-4fc1-90a9-d09a5020025a', 'West Valley Police Station', 954, 622);
INSERT INTO "PoliceStation" ("id", "name", "latitude", "longitude") VALUES ('407e81d4-06dd-4b73-9e00-0509617b5ea6', 'Central Police Station', 970, 219);
INSERT INTO "PoliceStation" ("id", "name", "latitude", "longitude") VALUES ('d59e4d90-a915-44ba-aabe-6ae49ffd0c78', 'East End Police Station', 394, 89);

INSERT INTO "Officer" ("id", "name", "rank", "contactNo", "email", "policeStationId") VALUES ('a59678bf-a94a-4fda-ad21-1a4178714d5f', 'David Wilson', 'Sergeant', '5555678', '274Jennifer_Schneider@gmail.com', '1234f043-6ff6-4a91-9cce-c530d8e2f48c');
INSERT INTO "Officer" ("id", "name", "rank", "contactNo", "email", "policeStationId") VALUES ('ff6a30d2-cea3-4996-b80b-16f55bc50626', 'David Wilson', 'Chief', '5558765', '279Peyton_Hane18@yahoo.com', '407e81d4-06dd-4b73-9e00-0509617b5ea6');
INSERT INTO "Officer" ("id", "name", "rank", "contactNo", "email", "policeStationId") VALUES ('e601526b-5ecf-43a4-9569-2f00efb3a36c', 'Emily Davis', 'Sergeant', '5558765', '284Julio10@gmail.com', 'e8ed401b-9f05-4fc1-90a9-d09a5020025a');
INSERT INTO "Officer" ("id", "name", "rank", "contactNo", "email", "policeStationId") VALUES ('9e24324e-c3a5-4a1a-a415-d9ad031503f2', 'Michael Johnson', 'Inspector', '5551234', '289Tabitha29@gmail.com', '762ecacb-35ca-482b-8e0f-184d5ecef8a0');
INSERT INTO "Officer" ("id", "name", "rank", "contactNo", "email", "policeStationId") VALUES ('0316fddc-203d-4d41-8857-d3aa36b2c827', 'John Smith', 'Sergeant', '5551234', '294Brooke57@yahoo.com', '8a7d5632-523c-4b43-b17e-17ab68c4d9a6');
INSERT INTO "Officer" ("id", "name", "rank", "contactNo", "email", "policeStationId") VALUES ('b2ada7c4-9817-4e63-a1ea-5ebc1386253b', 'Michael Johnson', 'Lieutenant', '5558765', '299Soledad38@yahoo.com', 'e8ed401b-9f05-4fc1-90a9-d09a5020025a');
INSERT INTO "Officer" ("id", "name", "rank", "contactNo", "email", "policeStationId") VALUES ('97b8b72b-3a22-4434-9800-961b476e971c', 'Emily Davis', 'Lieutenant', '5556789', '304Josianne76@yahoo.com', '841bec77-fb62-4655-8d92-202de401ae19');
INSERT INTO "Officer" ("id", "name", "rank", "contactNo", "email", "policeStationId") VALUES ('1a42a7da-ac8b-47db-ab94-1d1c9b455e29', 'John Smith', 'Inspector', '5558765', '309Winnifred.Kiehn@gmail.com', '762ecacb-35ca-482b-8e0f-184d5ecef8a0');
INSERT INTO "Officer" ("id", "name", "rank", "contactNo", "email", "policeStationId") VALUES ('9eb208bd-8476-46d6-ad81-7447558df0a4', 'David Wilson', 'Lieutenant', '5556789', '314Nicholaus_Monahan-Harvey@hotmail.com', 'c8207206-c5b2-43d4-aa27-18c99828a031');
INSERT INTO "Officer" ("id", "name", "rank", "contactNo", "email", "policeStationId") VALUES ('8cc05fe6-24ff-4e7c-b0be-fcca5d75eb64', 'Michael Johnson', 'Captain', '5558765', '319Harvey.Auer@yahoo.com', '75d94c04-1915-4baf-8db7-a31a1e8a3ee6');

INSERT INTO "SosAlert" ("id", "alertTime", "userId", "locationId", "policeStationId") VALUES ('dae32c31-5c74-4950-a5ac-20e55aeb98e8', '2023-11-21T05:06:51.607Z', '7b3d4401-274a-4ee4-974c-7912d8e6bc63', '6242aa66-b0f0-428c-a24f-a0c62e30d842', '762ecacb-35ca-482b-8e0f-184d5ecef8a0');
INSERT INTO "SosAlert" ("id", "alertTime", "userId", "locationId", "policeStationId") VALUES ('7d2cda92-49d1-4b14-b932-db5b7373efb6', '2024-04-18T17:38:26.070Z', 'e41cc421-d9cf-400d-b88c-570a29750be7', '5df45521-e12e-4c28-9d0e-c6fb1d9e2463', '841bec77-fb62-4655-8d92-202de401ae19');
INSERT INTO "SosAlert" ("id", "alertTime", "userId", "locationId", "policeStationId") VALUES ('543595a2-d582-4c5b-8df6-b1b4fecaf767', '2023-11-17T12:14:06.324Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'ccd3880f-c42c-4ef6-972e-73a88941f835', 'd59e4d90-a915-44ba-aabe-6ae49ffd0c78');
INSERT INTO "SosAlert" ("id", "alertTime", "userId", "locationId", "policeStationId") VALUES ('24d3f8a5-4456-4f71-a39c-ea14a1ebc30d', '2024-05-15T01:11:18.562Z', 'e41cc421-d9cf-400d-b88c-570a29750be7', '6242aa66-b0f0-428c-a24f-a0c62e30d842', '407e81d4-06dd-4b73-9e00-0509617b5ea6');
INSERT INTO "SosAlert" ("id", "alertTime", "userId", "locationId", "policeStationId") VALUES ('5bb529ae-58bd-4bcc-ac46-0f5d138f2f4b', '2024-11-02T08:59:43.274Z', '4f93dc86-3b49-4153-b296-f2112c2ed0cc', 'fe4997c5-5747-420d-92f4-b1a5f8ca5a68', 'd59e4d90-a915-44ba-aabe-6ae49ffd0c78');
INSERT INTO "SosAlert" ("id", "alertTime", "userId", "locationId", "policeStationId") VALUES ('ad150b71-da59-481c-911b-5671574325ea', '2023-11-19T08:25:31.612Z', '11a28d60-d86f-427b-addb-04c3d7044142', '0dd3d76a-d5ad-4e95-86d3-f834589e01b8', 'c8207206-c5b2-43d4-aa27-18c99828a031');
INSERT INTO "SosAlert" ("id", "alertTime", "userId", "locationId", "policeStationId") VALUES ('b87211b8-c71e-4e0d-9d6e-44124f4e1cea', '2024-02-04T10:05:31.619Z', 'ab9a2ff0-64a8-441c-9375-f0e13a96c7e8', 'dd5a2264-e661-4766-aa37-f52da2dc3119', '841bec77-fb62-4655-8d92-202de401ae19');
INSERT INTO "SosAlert" ("id", "alertTime", "userId", "locationId", "policeStationId") VALUES ('199f5e2e-893b-4440-a775-63f5461759d3', '2024-05-05T07:02:06.128Z', 'e41cc421-d9cf-400d-b88c-570a29750be7', '36898fe9-a5fe-45c6-b884-836cb3fb0e19', '75d94c04-1915-4baf-8db7-a31a1e8a3ee6');
INSERT INTO "SosAlert" ("id", "alertTime", "userId", "locationId", "policeStationId") VALUES ('0b2666c2-cad1-4a9b-bca8-3d8d93f20589', '2024-07-02T08:44:08.388Z', '7d52aa82-ced7-43ac-8620-e89853a4403c', '5df45521-e12e-4c28-9d0e-c6fb1d9e2463', '762ecacb-35ca-482b-8e0f-184d5ecef8a0');
INSERT INTO "SosAlert" ("id", "alertTime", "userId", "locationId", "policeStationId") VALUES ('55ef8d68-b8ec-46e1-a847-017343c35afb', '2024-05-22T05:10:23.376Z', '4f93dc86-3b49-4153-b296-f2112c2ed0cc', 'ccd3880f-c42c-4ef6-972e-73a88941f835', '8a7d5632-523c-4b43-b17e-17ab68c4d9a6');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
