# Automatic Merge Conflict Resolution Tools: The Current State and Barriers to Adoption
Replication package for the ICSE 2022 technincal track submission


### Running Merge Conflict Tools
Use the following instructions to run the tools used in our paper and replicate results in RQ1.

#### JDime

Instructions to run JDime can be found at: https://github.com/se-sic/jdime

To replicate results in the paper run JDime with the following options:

``` JDime -m semistructured {Left} {Base} {Right} -o {Merged File}  ```

#### AutoMerge

Instructions to run AutoMerge can be found at: https://github.com/thufv/automerge

To replicate results in the paper run AutoMerge with the following options:

``` java -jar AutoMerge.jar -e {User resolved file} -o {Merged File} -m structured -f -S {left} {base} {right} -K 3```

#### IntelliMerge 

Instructions to run IntelliMerge can be found at: https://github.com/Symbolk/IntelliMerge

To replicate results in the paper run IntelliMerge with the following options:

``` java -jar IntelliMerge-1.0.9.jar -d {Left} {Base} {Right} -o {Merged File} -s false ```

#### MergeBert

Contact the authors of MergeBert for access to the model: https://arxiv.org/abs/2109.00084

We run MergeBert with default options:

``` MergeBert --path_to_data {Directory with left/base/right} --extensions {file extensions} ```

### Survey 

#### Survey Data

All survey data can be found in the /Survey Data/ folder:

https://github.com/ICSE-2022-Submission/Automatic-Merge-Conflict-Resolution-Tools/tree/main/Survey%20Data

The folder contains two JSON files containing the survey responses and conflicts shown to participants in the survey interface. The folder also contains the data schema for the conflcits and responses. 
