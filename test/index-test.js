const jsdom = require( 'jsdom' );
const path = require( 'path' );
var chai = require( 'chai' );
chai.use( require( 'chai-fs' ) );

describe( 'this lab', () => {

  it( 'has a folder named my-repository', () => {
    chai.assert.isDirectory( './my-repository', 'no folder name "my-repository" was found' );
  } )

  it( 'has a valid git repository initialized for the my-repository folder', () => {
    chai.assert.isDirectory( './my-repository/.git', 'no ".git" folder was found within "/my-repository, used "git init" to initialize' );
  } )

  it( 'has a README.md file in the my-repository folder', () => {
    chai.assert.pathExists( './my-repository/README.md', 'no README.md file found within "/my-repository"' );
  } )

} )


