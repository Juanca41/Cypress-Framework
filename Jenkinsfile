//Pipeline and agent are the same as 'node'
pipeline { //Must be top level
    agent any //Indicates where to be executed
    stages { //Where the work happens
        // stage('build'){
        //     steps {
                
        //     }
        // }
        stage('test'){
            steps {
                script{
                    sh 'npm install'
	                sh 'npx cypress run --browser=chrome --record --key 32ce075f-4568-4687-a3bb-593285642cc7'
                }
            }
        }
        // stage('deploy'){
        //     steps {
            
        //     }
        // }
    }
}