with open("veins.txt") as f:
    veins = f.read()


# mat_all=dict()
def materify(X):
    S = ""
    for i in X:
        if i.isupper() and S != "":
            S += "_" + i.lower()
        else:
            S += i.lower()
    return S


veins = veins.replace("    ", "").split("\n\n")


def keyer(x, y, b=False):
    return x + ":" + ('"' if b else "") + str(y) + ('"' if b else "") + ", "


def conv(s):
    return "".join(w.capitalize() for w in s.split("_"))


for index in range(len(veins)):
    minerals = dict()
    weight_total = 0
    vein = veins[index]
    layer = vein.split("\n")[2][22:-1]
    temp = vein.split("\n")[1]
    temp = temp[temp.find("density(") + 8 : -1]
    temp = temp[: temp.find("f)")]
    layer = layer.lower()
    temp = 0.9
    density = temp
    nimi = ""
    for line in vein.split("\n"):
        materia = None
        weight = 0
        if line.find('create("') != -1:
            temp = line[line.find('create("') + 8 :]
            nimi = temp[: temp.find('"')]
        if line.find(".mat(") != -1:
            temp = line[line.find(".mat(") + 5 :]
            materia = temp[: temp.find(")")]
            if line.find("l.weight(") != -1:
                temp = line[line.find("l.weight(") + 9 :]
                temp = temp[: temp.find(")")]
                weight = int(temp)
            elif line.find(").size(") != -1:
                temp = line[line.find(").size(") + 7 :]
                temp = temp[: temp.find(")")]
                weight = int(temp)
            else:
                weight = 1
        if line.find("DikeBlockDefinition(") != -1:
            temp = line[line.find("DikeBlockDefinition(") + 20 :].split(", ")
            materia = temp[0]
            weight = int(temp[1])
        if line.find("VeinBlockDefinition(") != -1:
            temp = line[line.find("VeinBlockDefinition(") + 20 :].split(", ")
            materia = temp[0]
            weight = int(temp[1].replace(")", ""))
        if materia == None:
            continue
        #materia = materify(materia)
        weight_total += weight
        if materia not in minerals:
            minerals[materia] = weight
        else:
            minerals[materia] += weight
    json = "{"
    json += keyer("layer", layer, True)
    json += keyer("name", nimi, True)
    json += "minerals: ["
    for key, value in minerals.items():
        json += "{"
        json += keyer("mat", "GTMaterials." + key)
        json += keyer("weight", value)
        json = json[:-2]
        json += "}, "
    json = json[:-2]
    json += "]},"
    print(json)
